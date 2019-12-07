const express = require('express');
const router = express.Router();
const auth = require('../../middle/auth');
const request = require('request');
const config = require('config');
const { check, validationResult } = require('express-validator');
const Profile = require('../../Models/Profile');
const User = require('../../Models/User');
const Post = require('../../Models/Post');

// @route GET api/profile/me
// @desc get current users profile
// @access private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id}).populate('user', ['name', 'avatar']);
  if(!profile) {
    return res.status(400).json({ msg: 'No profile for user'});
  }
  res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server err');
  }
});

// @route POST api/profile
// @desc create or update user profile
// @access private

router.post('/', [auth, [
  check('status', 'status is required').not().isEmpty(),
  check('skills', 'skills are required').not().isEmpty()
  ]
 ],
 async (req,res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

   const {
     company,
     website,
     location,
     bio,
     status,
     githubusername,
     skills,
     youtube,
     facebook,
     twitter,
     instagram,
     linkedin

   } = req.body;

   //build profile Object

   const profileFields = {};
   profileFields.user = req.user.id;
   if(company) profileFields.company = company;
   if(website) profileFields.website = website;
   if(location) profileFields.location = location;
   if(bio) profileFields.bio = bio;
   if(status) profileFields.status = status;
   if(githubusername) profileFields.githubusername = githubusername;
   if(skills) {
     profileFields.skills = skills.split(',').map(skill => skill.trim());

   }
   profileFields.social = {}
     if(youtube) profileFields.youtube = youtube;
     if(twitter) profileFields.twitter = twitter;
     if(facebook) profileFields.facebook = facebook;
     if(linkedin) profileFields.linkedin = linkedin;
     if(instagram) profileFields.instagram = instagram;

     try {
       let profile = await Profile.findOne({ user: req.user.id });

       // update profile
       if(profile) {
         profile = await Profile.findOneAndUpdate(
           { user: req.user.id},
           { $set: profileFields},
           { new: true });

           return res.json(profile);
       }

       //create
       profile = new Profile(profileFields);
       await profile.save();
       res.json(profile);
     } catch (err) {
       console.log(err.message);
       res.status(500).send('Server error');
     }

 })

 // @route GET api/profile
 // @desc get all profiles
 // @access public

 router.get('/all', async (req, res) => {
   try {
     const profiles = await Profile.find().populate('user', ['name', 'avatar']);
     res.json(profiles);
   } catch (err) {
     res.status(500).send('server error');
   }
 })

 // @route   GET api/profile/user/:user_id
 // @desc    Get profile by user ID
 // @access  Public

 router.get('/user/:user_id', async (req, res) => {
   try {
     const profile = await Profile.findOne({
       user: req.params.user_id
     }).populate('user', ['name', 'avatar']);

     if(!profile) return res.status(400).json({ msg: 'profile not found'});

     res.json(profile);
   } catch (err) {
     if(err.kind == 'ObjectId') {
       return res.status(400).json({ msg: 'profile not found'});
     }
     res.status(500).send('server error');
   }
 });

 // @route   DELETE api/profile
 // @desc    Delete profile, user, and posts
 // @access  Private

router.delete('/', auth, async (req, res) => {
  try {
    await Post.deleteMany({ user: req.user.id });
    await Profile.deleteOne({ user: req.user.id });
    await User.deleteOne({ _id: req.user.id });

    res.json({ msg: 'user removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

// @route   PUT api/profile/experience
// @desc    Add profile exp
// @access  Private

router.put(
  '/experience',
  [
    auth,
    [
      check('title', 'title required').not().isEmpty(),
      check('company', 'company required').not().isEmpty(),
      check('from', 'date required').not().isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    } = req.body;

    const newExp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.experience.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
)

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private

router.delete('/experience/:exp_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    //get remvoe index

    const removeIndex = profile.experience
      .map(item => item.id)
      .indexOf(req.params.exp_id);

    profile.experience.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
})

// @route   PUT api/profile/education
// @desc    Add profile education
// @access  Private

router.put(
  '/education',
  [
    auth,
    [
      check('school', ' required').not().isEmpty(),
      check('degree', 'degree required').not().isEmpty(),
      check('fieldofstudy', 'fieldofstudy required').not().isEmpty(),
      check('from', 'date required').not().isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
)

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private

router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    //get remvoe index

    const removeIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
})

// @route   GET api/profile/github/:username
// @desc    Get user repos from github
// @access  Public

// router.get('/github/:username', (req, res) => {
//   try {
//     const options = {
//       uri : 'https://api.github.com/users/${req.params.username}/repos?per_page=5&
//       sort=created:asc&client_id=${config.get('githubclientId')}&client_secret=${config.get('githubSecret')}',
//       method: 'GET',
//       headers: {'user-agent': 'node.js'}
//     }
//
//     request(options, (error, response, body ) => {
//       if(error) console.error(error);
//
//       if(response.statusCode !== 200) {
//         res.status(404).json({ msg: 'no github profile found'});
//       }
//
//       res.json(JSON.parse(body));
//     })
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('server err');
//   }
// })


module.exports = router;
