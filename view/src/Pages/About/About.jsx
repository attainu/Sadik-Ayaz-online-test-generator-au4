import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className='w3-container w3-center w3-animate-opacity'>
          <main role="main">
          <div class="">
            <div class="container">
              <h1 class="display-3">About US</h1><br/>
              <p>Test-Mania is an online test generator to help you create and manage your tests!
                      Create, print and publish your tests online! Test-Mania makes it easy for you to perfectly format multiple question types, 
                      print alternate versions, and publish to the web for online tests. 
                      Online tests are automatically graded!<br/><br/>
                    <Link to="/sign-up">
                      <button type="button" className="btn btn-success">
                        Sign Up - It's Free
                      </button>
                    </Link></p>
            </div>
            <hr/>
            </div>
            <div class="container">
              <h1 className='text-center underline'>Features</h1><br/>
              <div class="row">
                <div class="col-md-4">
                  <h2>Perfectly formatted tests</h2>
                  <p>Create multiple choice, fill-in-the-blank, matching, short answer and true or false questions. Add instructions and divide your test into multiple sections. </p>
                </div>
                <div class="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                  <h2>Question Pools</h2>
                  <p>Create a test with your entire question bank. Publish your test and choose to present as few or as many questions as you require. Each test taker will have a random set of questions.</p>
                  
                </div>
                <div class="col-md-4">
                  <h2>Build exams with ease</h2>
                  <p>Create an exam from your existing tests with just a few clicks. At any time you can copy a question from one test to another one!</p>
                </div><br/>

                <div class="col-md-4">
                  <h2>Online tests graded automatically</h2>
                  <p>Published online tests are graded automatically. View and print student's results and override grading when necessary. The same test you print, is the same test you publish online!</p>
                </div>
                <div class="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                  <h2>Question analysis reporting</h2>
                  <p>Quick and easy reports to see how many test takers answered which questions right and wrong.</p>
                </div>
                <div class="col-md-4 ">
                  <h2>Export to Word or PDF</h2>
                  <p>Any test, any version, including answer sheets can be download as a Micrsoft Word or PDF document to be saved and printed later.</p>
                </div><br/>
              </div><br/>

              <div class=" text-center">
                    <h2>Make the most of your time, sign up now for Test-Mania!</h2>
                    <p>EasyTestMaker eliminates wasted time spent on formatting. 
                    Add new questions and sections, move them around as needed and let EasyTestMaker do the hard work for you. 
                    All your tests are saved for easy retrieval. 
                    You can make changes or print out additional copies of any test you create.</p>
                  <Link to="/sign-up">
                      <button type="button" className="btn btn-success">
                        Build Test Now!
                      </button>
                    </Link>
                  </div>

              <hr/>

              </div>
            
          </main>
      </div>
    );
  }
}

export default About;
