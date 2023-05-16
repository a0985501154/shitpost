import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image3 from "../../Asset/Img/Dead.jpg";

const SubPage3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={image3}
          alt="Deadlift"
          className="img-fluid rounded mx-auto d-block"
          data-aos="fade-right"
          style={{ margin: "0 auto", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="col-md-6">
        <h2 data-aos="fade-right">Mastering the Deadlift</h2>
        <p data-aos="fade-right">
          Your Ultimate Guide to Deadlifting like a Pro
        </p>
        <div>
          <h3 data-aos="fade-right">Introduction</h3>
          <p data-aos="fade-right">
            Welcome to our guide on <strong>mastering the deadlift</strong>! In
            this article, we will provide you with essential tips and techniques
            to help you deadlift like a pro.
          </p>
          <h4 data-aos="fade-right">Benefits of Deadlifts</h4>
          <ul data-aos="fade-right">
            <li>
              Building <strong>total body strength</strong>
            </li>
            <li>
              Developing <strong>posterior chain muscles</strong>
            </li>
            <li>
              Enhancing <strong>grip strength</strong>
            </li>
          </ul>
          <p data-aos="fade-right">Keep reading to learn more!</p>
          <h3 data-aos="fade-right">Technique</h3>
          <p data-aos="fade-right">
            Proper deadlift technique is crucial to avoid injury and maximize
            results. Here are some key points to keep in mind:
          </p>
          <ol data-aos="fade-right">
            <li>
              Stand with your feet shoulder-width apart, toes slightly pointed
              out.
            </li>
            <li>
              Bend at the hips and knees, keeping your back straight and chest
              up.
            </li>
            <li>
              Grip the bar with hands just outside your knees, palms facing
              down.
            </li>
            <li>
              Drive through your heels, lift the bar by extending your hips and
              knees.
            </li>
            <li>Keep the bar close to your body throughout the movement.</li>
          </ol>
          <p data-aos="fade-right">
            Remember to maintain proper form throughout the lift.
          </p>
          <h3 data-aos="fade-right">Common Mistakes</h3>
          <p data-aos="fade-right">
            Avoid these common mistakes when deadlifting:
          </p>
          <ul data-aos="fade-right">
            <li>Rounding your back</li>
            <li>Lifting with your back instead of your legs</li>
            <li>Not engaging your core</li>
          </ul>
          <p data-aos="fade-right">
            By addressing these mistakes, you can improve your deadlift
            technique and achieve better results.
          </p>
          <h3 data-aos="fade-right">Conclusion</h3>
          <p data-aos="fade-right">
            Congratulations! You now have the knowledge to master the deadlift
            exercise. Remember to <strong>start with lighter weights</strong> if
            you're a beginner and <strong>focus on proper form</strong>. Happy
            deadlifting!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubPage3;
