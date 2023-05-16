import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../Asset/Img/Squat.png";

const SubPage1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="row">
<div className="col-md-6">
  <img
    src={image1}
    alt="Squat"
    className="img-fluid rounded mx-auto d-block"
    data-aos="fade-right"
    style={{ margin: "0 auto", height: "100%", objectFit: "cover" }}
  />
</div>

      <div className="col-md-6">
        <h2 data-aos="fade-right">Mastering the Squat</h2>
        <p data-aos="fade-right">Your Ultimate Guide to Squatting like a Pro</p>
        <div>
          <h3 data-aos="fade-right">Introduction</h3>
          <p data-aos="fade-right">
            Welcome to our guide on <strong>mastering the squat</strong>! In
            this article, we will provide you with essential tips and techniques
            to help you squat like a pro.
          </p>
          <h4 data-aos="fade-right">Benefits of Squats</h4>
          <ul data-aos="fade-right">
            <li>
              Building <strong>lower body strength</strong>
            </li>
            <li>
              Improving <strong>balance and stability</strong>
            </li>
            <li>
              Enhancing <strong>athletic performance</strong>
            </li>
          </ul>
          <p data-aos="fade-right">Keep reading to learn more!</p>
          <h3 data-aos="fade-right">Technique</h3>
          <p data-aos="fade-right">
            Proper squat technique is crucial to avoid injury and maximize
            results. Here are some key points to keep in mind:
          </p>
          <ol data-aos="fade-right">
            <li>
              Start with your feet <strong>shoulder-width apart</strong>.
            </li>
            <li>Keep your chest up and your back straight.</li>
            <li>Lower your body by bending your knees and hips.</li>
            <li>Push through your heels to return to the starting position.</li>
          </ol>
          <p data-aos="fade-right">
            Remember to maintain proper form throughout the movement.
          </p>
          <h3 data-aos="fade-right">Common Mistakes</h3>
          <p data-aos="fade-right">
            Avoid these common mistakes when squatting:
          </p>
          <ul data-aos="fade-right">
            <li>Leaning too far forward</li>
            <li>Allowing your knees to cave in</li>
            <li>Not squatting deep enough</li>
          </ul>
          <p data-aos="fade-right">
            By addressing these mistakes, you can improve your squat technique
            and achieve better results.
          </p>
          <h3 data-aos="fade-right">Conclusion</h3>
          <p data-aos="fade-right">
            Congratulations! You now have the knowledge to master the squat
            exercise. Remember to <strong>practice regularly</strong> and{" "}
            <strong>listen to your body</strong>. Happy squatting!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubPage1;
