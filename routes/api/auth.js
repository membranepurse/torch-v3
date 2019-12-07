const express = require('express');
const router = express.Router();
const auth = require('../../middle/auth')
const bcrypt = require('bcryptjs');
const User =  require('../../Models/User');

const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

// @route GET api/auth
// @desc test route
// @access public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');

  }
});

// @route POST api/auth
// @desc auth user and get jsonwebtoken
// @access public

router.post(
  '/',
  [
  check('email', 'Please include valid email').isEmail(),
  check('password', 'Password required').exists()
],
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
      //see if user exist
    let user = await User.findOne({ email });

    if(!user) {
      return res.status(400).json({ errors: [ {msg:'Invalid Credentials'}] });
    }

    //make sure password matches user
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return res.status(400).json({ errors: [ {msg:'Invalid Credentials'}] });
    }

    // return jsonwebtoken
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000},
      (err, token)  => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch(err){
    console.log(err.message);
    res.status(500).send('server error');
  }
});

module.exports = router;
