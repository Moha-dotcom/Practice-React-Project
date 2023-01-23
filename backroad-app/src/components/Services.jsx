import React from 'react'
import { services } from '../data/data'

const Services = () => {
  return (
    <div>
          <section className="section services" id="services">
      <div className="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div className="section-center services-center">
        {services.map(service => {
          return (
            <article className="service" key={service.id}>
            <span className="service-icon"><i className={service.icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{service.serviceName}</h4>
              <p className="service-text">
               {service.serviceDiscription}
              </p>
            </div>
          </article>
          )
        })}

       
      </div>
    </section>
      
    </div>
  )
}

export default Services
