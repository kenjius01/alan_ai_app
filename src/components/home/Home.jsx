import './home.css';

import React from 'react';
import { Header } from '../header/Header';


export const Home = () => {
  return (
    <div className='main'>
      <Header />
      <div className='home-container'>
        <div className='home-content'>
          <div className='home-intro'>
            <h1>In-app voice assistant for Entertainment!</h1>
            <p>
              Join with us! You can watch movies or read newspaper only by your
              voice. That's very easy to use!
            </p>
          </div>
          <div className='home-img'>
            <img
              src='https://preview.colorlib.com/theme/podcast/images/1x/xasset-1.png.pagespeed.ic.a_VX6ghwiv.png'
              alt=''
            />
          </div>
        </div>
        <div className='home-platform'>
          <div className='home-platform-content'>
            <h2 className='platform-title'>The complete Voice AI Platform</h2>
            <div className='platform-subtitle'>
              With Alan, you get all the tools you need in one place. Empower
              your developers to build, test and deploy voice interfaces in no
              time.
            </div>
            <div className='platform-list'>
              <div className='platform-item'>
                <div className='platform-item-img'>
                  <img src='./platform.png' alt='' />
                </div>
                <div className='platform-content'>
                  <h3>Developer-friendly suite of tools</h3>
                  <div className='platform-info'>
                    Alan Studio, a simple but powerful IDE, is tailored to the
                    challenges of voice interface design. Write and test
                    conversational scenarios, maintain dialog versions and
                    publish the results to a sandbox or the production
                    environment. Focus on bigger things and let Alan take care
                    of the rest.
                  </div>
                </div>
              </div>
              <div className='platform-item'>
                <div className='platform-item-img'>
                  <img src='./platform2.png' alt='' />
                </div>
                <div className='platform-content'>
                  <h3>Instant integration for any platform</h3>
                  <div className='platform-info'>
                    With lightweight Alan SDKs, you can target any mobile and
                    web application. Design your voice assistant once and deploy
                    it to Web, iOS, Android, and cross-platform solutions:
                    Flutter, React Native, React, Apache Cordova, Ionic.
                  </div>
                </div>
              </div>
              <div className='platform-item'>
                <div className='platform-item-img'>
                  <img src='./platform3.png' alt='' />
                </div>
                <div className='platform-content'>
                  <h3>Advanced conversational analytics</h3>
                  <div className='platform-info'>
                    Alan captures key data points such as users' utterances,
                    frequency of use and session length to let you see how
                    customers interact with a voice assistant in your app.
                    Leverage this data to understand users' behavior and flows,
                    identify unhandled voice commands and optimize the voice
                    assistant effectiveness.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
