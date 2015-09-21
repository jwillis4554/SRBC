using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SavannahRiverBrewingAPI.Models;

namespace SavannahRiverBrewingAPI.Controllers
{
    public class CarController : ApiController
    {

        List<Car> m_Car = new List<Car>()
 
        {
 
           new Car()
 
           {
 
               RegistrationNumber = 1000,
 
               Company = "Ferrari",
 
               Color = "Red",
 
               Type = "Sport"
 
           },
 
           new Car()
 
           {
 
               RegistrationNumber = 1001,
 
               Company = "Mercedes",
 
               Color = "White",
 
               Type = "Comfort"
 
           },
 
           new Car()
 
           {
 
               RegistrationNumber = 1002,
 
               Company = "Audi",
 
               Color = "Black",
 
               Type = "Luxury"
 
           }
 
        };



        public HttpResponseMessage GetCar(int registrationNumber)
        {

            var car = from c in m_Car

                      where c.RegistrationNumber == registrationNumber

                      select c;



            return Request.CreateResponse<Car>(HttpStatusCode.OK, car.FirstOrDefault());

        }



        public HttpResponseMessage PostCar(Car car)
        {

            m_Car.Add(car);



            return Request.CreateResponse<Car>(HttpStatusCode.Created, car);

        }

    }
}
