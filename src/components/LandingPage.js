import React from 'react'
import { Link } from 'react-router'

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div>
    <header className="image-bg-fluid-height">
        <img className="img-responsive img-center" src="/img/logo-with-text.png" alt=""/>
    </header>

    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="section-heading">Schedule with Speed!</h1>
                    <p className="lead section-lead">All it takes is a few clicks.</p>
                    <p className="section-paragraph">With our revolutionary design and interface, you can get up and running with signing up for events that others are hosting!</p>
                </div>
                <div className="col-lg-4">
                  <img src="/img/logo.png" alt="logo" />
                </div>
            </div>
        </div>
    </section>

    <section style={{backgroundColor:"white"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                  <img src="/img/get-going.png" alt="logo" />
                </div>
                <div className="col-lg-8">
                    <h1 className="section-heading">Get Going in Minutes</h1>
                    <p className="lead section-lead">Spend more time doing, and less time planning.</p>
                    <p className="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="section-heading">Create Events Yourself</h1>
                    <p className="lead section-lead">Need to advertise your services? Look no further!</p>
                    <p className="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
                </div>
                <div className="col-lg-4">
                  <img src="/img/computer-man.png" alt="logo" />
                </div>
            </div>
        </div>
    </section>
      </div>
    )
  }
}