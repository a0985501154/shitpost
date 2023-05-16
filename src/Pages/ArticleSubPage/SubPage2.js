import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image2 from "../../Asset/Img/Bench.jpg";

const SubPage2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={image2}
          alt="Bench Press"
          className="img-fluid rounded mx-auto d-block"
          data-aos="fade-right"
          style={{ margin: "0 auto", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="col-md-6">
        <h2 data-aos="fade-right">Mastering the Bench Press</h2>
        <p data-aos="fade-right">
          Your Ultimate Guide to Bench Pressing like a Pro
        </p>
        <div>
          <h3 data-aos="fade-right">Introduction</h3>
          <p data-aos="fade-right">
            Welcome to our guide on <strong>mastering the bench press</strong>!
            In this article, we will provide you with essential tips and
            techniques to help you bench press like a pro.
          </p>
          <h4 data-aos="fade-right">Benefits of Bench Press</h4>
          <ul data-aos="fade-right">
            <li>
              Building <strong>upper body strength</strong>
            </li>
            <li>
              Developing <strong>chest, shoulder, and tricep muscles</strong>
            </li>
            <li>
              Improving <strong>stability and balance</strong>
            </li>
          </ul>
          <p data-aos="fade-right">Keep reading to learn more!</p>
          <h3 data-aos="fade-right">Technique</h3>
          <p data-aos="fade-right">
            Proper bench press technique is crucial to avoid injury and maximize
            results. Here are some key points to keep in mind:
          </p>
          <ol data-aos="fade-right">
            <li>
              Lie flat on the bench with your feet firmly planted on the ground.
            </li>
            <li>
              Grip the bar with your hands slightly wider than shoulder-width
              apart.
            </li>
            <li>
              Lower the bar to your mid-chest while keeping your elbows at a
              45-degree angle.
            </li>
            <li>Push the bar back up, extending your arms fully.</li>
          </ol>
          <p data-aos="fade-right">
            Remember to maintain proper form throughout the movement.
          </p>
          <h3 data-aos="fade-right">Common Mistakes</h3>
          <p data-aos="fade-right">
            Avoid these common mistakes when bench pressing:
          </p>
          <ul data-aos="fade-right">
            <li>Arching your back excessively</li>
            <li>Bouncing the bar off your chest</li>
            <li>Lifting too much weight beyond your capability</li>
          </ul>
          <p data-aos="fade-right">
            By addressing these mistakes, you can improve your bench press
            technique and achieve better results.
          </p>
          <h3 data-aos="fade-right">Conclusion</h3>
          <p data-aos="fade-right">
            Congratulations! You now have the knowledge to master the bench
            press exercise. Remember to <strong>practice regularly</strong> and{" "}
            <strong>start with lighter weights</strong> if you're a beginner.
            Happy bench pressing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubPage2;
