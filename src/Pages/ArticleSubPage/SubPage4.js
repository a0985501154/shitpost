import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image4 from "../../Asset/Img/OHP.jpg";

const SubPage4 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={image4}
          alt="Overhead Press"
          className="img-fluid rounded mx-auto d-block"
          data-aos="fade-right"
          style={{ margin: "0 auto", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="col-md-6">
        <h2 data-aos="fade-right">Mastering the Overhead Press</h2>
        <p data-aos="fade-right">
          Your Ultimate Guide to Overhead Pressing like a Pro
        </p>
        <div>
          <h3 data-aos="fade-right">Introduction</h3>
          <p data-aos="fade-right">
            Welcome to our guide on{" "}
            <strong>mastering the overhead press</strong>! In this article, we
            will provide you with essential tips and techniques to help you
            overhead press like a pro.
          </p>
          <h4 data-aos="fade-right">Benefits of Overhead Press</h4>
          <ul data-aos="fade-right">
            <li>
              Building <strong>upper body strength</strong>, particularly in the
              shoulders and arms
            </li>
            <li>
              Developing <strong>core stability</strong>
            </li>
            <li>
              Improving <strong>shoulder mobility</strong>
            </li>
          </ul>
          <p data-aos="fade-right">Keep reading to learn more!</p>
          <h3 data-aos="fade-right">Technique</h3>
          <p data-aos="fade-right">
            Proper overhead press technique is crucial to avoid injury and
            maximize results. Here are some key points to keep in mind:
          </p>
          <ol data-aos="fade-right">
            <li>
              Start with your feet shoulder-width apart and the bar resting on
              your upper chest.
            </li>
            <li>
              Grip the bar slightly wider than shoulder-width with your palms
              facing forward.
            </li>
            <li>
              Press the bar straight up overhead, extending your arms fully.
            </li>
            <li>
              Lower the bar back down to the starting position, maintaining
              control.
            </li>
          </ol>
          <p data-aos="fade-right">
            Remember to maintain proper form throughout the movement.
          </p>
          <h3 data-aos="fade-right">Common Mistakes</h3>
          <p data-aos="fade-right">
            Avoid these common mistakes when overhead pressing:
          </p>
          <ul data-aos="fade-right">
            <li>Arching your back excessively</li>
            <li>Using excessive momentum or 'cheating' by using your legs</li>
            <li>Not fully extending your arms at the top</li>
          </ul>
          <p data-aos="fade-right">
            By addressing these mistakes, you can improve your overhead press
            technique and achieve better results.
          </p>
          <h3 data-aos="fade-right">Conclusion</h3>
          <p data-aos="fade-right">
            Congratulations! You now have the knowledge to master the overhead
            press exercise. Remember to{" "}
            <strong>start with lighter weights</strong>
            if you're a beginner and{" "}
            <strong>focus on proper form and technique</strong>. Happy overhead
            pressing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubPage4;
