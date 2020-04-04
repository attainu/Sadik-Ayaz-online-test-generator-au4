import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container w3-container w3-center w3-animate-opacity">
          <img
            src="../../screenie.png"
            alt="..."
            className="float-right w3-container w3-center w3-animate-bottom"
          ></img>

          <h1 className="col">
            Create a test for your <br />
            Class, Business or Organization.
          </h1>
          <br />

          <h4 className="col">
            Distribute your tests online and get
            <br /> the results instantly. Test-Mania does <br /> all the grading
            for you.
          </h4>
          <br />

          <div class="text-center">
            <Link to="/Signup">
              <button type="button" className="btn btn-success">
                Build a Test
              </button>
            </Link>
          </div>
          <br />
          <hr></hr>

          <h1 className="text-center">Test-Mania is (very) Simple.</h1>
          <div class="how-section1">
            <div class="row">
              <div class="col-md-6 how-img">
                <img
                  src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png"
                  class="rounded-circle img-fluid w3-container w3-center w3-animate-bottom"
                  alt=""
                />
              </div>
              <div class="col-md-6">
                <h4>Adjust a few settings.</h4>

                <p class="text-muted">
                  In a few clicks, you can completely customize your test.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h4>Add your questions.</h4>

                <p class="text-muted">
                  On a single page, you can insert, edit, and rearrange all your
                  questions.
                </p>
              </div>
              <div class="col-md-6 how-img">
                <img
                  src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png"
                  class="rounded-circle img-fluid "
                  alt=""
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 how-img">
                <img
                  src="https://image.ibb.co/ctSLu9/Work_Section2_freelance_img3.png"
                  class="rounded-circle img-fluid"
                  alt=""
                />
              </div>
              <div class="col-md-6">
                <h4>Distribute the URL.</h4>

                <p class="text-muted">
                  Just email the URL to your students, or post on your website,
                  and you're done.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h4>Test-Mania has the most comprehensive results page.</h4>

                <p class="text-muted">
                  At a glance you can see how everyone performed. You can
                  search, sort, filter, partition, tag, archive, print, and
                  email the results. You can dive into a student's results to
                  see all their answers, leave feedback on their responses, and
                  manually adjust their scores. Whether you have 10 results, or
                  10,000, Test-Mania loads fast.
                </p>
              </div>
              <div class="col-md-6 how-img">
                <img
                  src="https://image.ibb.co/gQ9iE9/Work_Section2_freelance_img4.png"
                  class="rounded-circle img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
 
          <h2 className="text-center">Who uses Test-Mania?</h2>

          <div class="row">
            <div class="col-md-4 text-center">
              <h2>Teachers</h2>
              <p>
                Use Test-Mania to automatically grade your tests so you can get
                back to teaching. Create homework quizzes for your students and
                reuse them year after year. You can print out paper copies for
                in-class assignments too.
              </p>
            </div>

            <div class="col-md-4 text-center">
              <h2>Trainers</h2>
              <p>
                Ensure your learners have mastered your training material with
                Test-Mania. Build a test, distribute it, review the results,
                leave feedback, and email the final results to the student.
              </p>
            </div>

            <div class="col-md-4 text-center">
              <h2>Employers</h2>
              <p>
                Keep your employees up to date by conducting your safety,
                security and compliance quizzes on Test-Mania. Export the
                results to Excel to keep for your records.
              </p>
            </div>
          </div>
          <hr></hr>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
