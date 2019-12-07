/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../actions/profile';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

const UserProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile,  history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);


  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    });
  }, [loading, getCurrentProfile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  }

    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h1 className="large text-primary">
                      User Profile
                  </h1>
                </CardHeader>
                <CardBody>
                <Fragment>

                    <p className="lead">
                      <i className="fas fa-user"></i> Let's get some information to make your
                      profile stand out
                    </p>
                    <small>* = required field</small>
                    <form className="form" onSubmit={e => onSubmit(e)}>
                      <div className="form-group">
                        <select name="status" value={status} onChange={e => onChange(e)}>
                          <option value="0">* Select Professional Status</option>
                          <option value="Doctor">Doctor</option>
                          <option value="Manager">Manager</option>
                          <option value="Intern">Intern</option>
                          <option value="Other">Other</option>
                        </select>
                        <small className="form-text"
                          >Job</small
                        >
                      </div>
                      <div className="form-group">
                        <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)}/>
                        <small className="form-text"
                          >Hospital</small
                        >
                      </div>
                      <div className="form-group">
                        <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)}/>
                        <small className="form-text"
                          >Website</small
                        >
                      </div>
                      <div className="form-group">
                        <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)}/>
                        <small className="form-text"
                          >City</small
                        >
                      </div>
                      <div className="form-group">
                        <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)}/>
                        <small className="form-text"
                          >County</small
                        >
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Github Username"
                          name="githubusername"
                          value={githubusername} onChange={e => onChange(e)}
                        />
                        <small className="form-text"
                          >Name</small
                        >
                      </div>
                      <div className="form-group">
                        <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)}></textarea>
                        <small className="form-text">Tell us a little about yourself</small>
                      </div>

                      <div className="my-2">
                        <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
                          Add Social Network Links
                        </button>
                        <span>Optional</span>
                      </div>

                      {displaySocialInputs && <Fragment>
                        <div className="form-group social-input">
                          <i className="fab fa-twitter fa-2x"></i>
                          <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)}/>
                        </div>

                        <div className="form-group social-input">
                          <i className="fab fa-facebook fa-2x"></i>
                          <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)}/>
                        </div>

                        <div className="form-group social-input">
                          <i className="fab fa-youtube fa-2x"></i>
                          <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)}/>
                        </div>

                        <div className="form-group social-input">
                          <i className="fab fa-linkedin fa-2x"></i>
                          <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)}/>
                        </div>

                        <div className="form-group social-input">
                          <i className="fab fa-instagram fa-2x"></i>
                          <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)}/>
                        </div>

                        </Fragment>}



                    </form>
                </Fragment>

                </CardBody>
                <CardFooter>
                  <Button className="btn btn-primary my-1" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                  <div className="card-description">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
}

UserProfile.propTypes = {
  CreateProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(UserProfile));
