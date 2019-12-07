const express = require('express');
const router = express.Router();
const auth = require('../../middle/auth');
const request = require('request');
const config = require('config');
const { check, validationResult } = require('express-validator');
const Profile = require('../../Models/Profile');
const Graphs= require('../../Models/Graphs');

const User = require('../../Models/User');
const Post = require('../../Models/Post');

// @route GET api/graph/me
// @desc get current users graph
// @access private

router.get('/me', auth, async (req, res) => {
  try {
    const graph = await Graphs.findOne({ user: req.user.id}).populate('user', ['name', 'avatar']);
  if(!graph) {
    return res.status(400).json({ msg: 'No graph for user'});
  }
  res.json(graph);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server err');
  }
});

// @route POST api/graph
// @desc create or update user graph
// @access private

router.post('/', auth,
 async (req,res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

   const {
     readmin,
     patFall,
     medErr,
     recommend,
     admin,
     avgDailyCensus,
     avgLOS,
     labor,
     margin,
     netRev,
     currRatio,
     debtCap


   } = req.body;

   //build graph Object

   const graphFields = {};
   graphFields.user = req.user.id;
   if(readmin) graphFields.readmin = readmin;
   if(patFall) graphFields.patFall = patFall;
   if(medErr) graphFields.medErr = medErr;
   if(recommend) graphFields.recommend = recommend;
   if(admin) graphFields.admin = admin;
   if(avgDailyCensus) graphFields.avgDailyCensus = avgDailyCensus;
   if(avgLOS) graphFields.avgLOS = avgLOS;
   if(labor) graphFields.labor = labor;
   if(margin) graphFields.margin = margin;
   if(netRev) graphFields.netRev = netRev;
   if(currRatio) graphFields.currRatio = currRatio;
   if(debtCap) graphFields.debtCap = debtCap;

     try {
       let graph = await Graphs.findOne({ user: req.user.id });

       // update graph
       if(graph) {
         graph = await Graphs.findOneAndUpdate(
           { user: req.user.id},
           { $set: graphFields},
           { new: true });

           return res.json(graph);
       }

       //create
       graph = new Graphs(graphFields);
       await graph.save();
       res.json(graph);
     } catch (err) {
       console.log(err.message);
       res.status(500).send('Server error');
     }

 });


  // @route   GET api/graph/user/:user_id
  // @desc    Get graph by user ID
  // @access  Public

  router.get('/user/:user_id', async (req, res) => {
    try {
      const graph = await Graphs.findOne({
        user: req.params.user_id
      }).populate('user', ['name', 'avatar']);

      if(!graph) return res.status(400).json({ msg: 'graph not found'});

      res.json(graph);
    } catch (err) {
      if(err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'graph not found'});
      }
      res.status(500).send('server error');
    }
  });

  router.get('/all', async (req, res) => {
    try {
      const graphs = await Graphs.find().populate('user', ['name', 'avatar']);
      res.json(graphs);
    } catch (err) {
      res.status(500).send('server error');
    }
  });


module.exports = router;
