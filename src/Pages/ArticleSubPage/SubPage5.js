import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image5 from "../../Asset/Img/Row.jpg";

const SubPage5 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={image5}
          alt="Bent-Over Row"
          className="img-fluid rounded mx-auto d-block"
          data-aos="fade-right"
          style={{ margin: "0 auto", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="col-md-6">
        <h2 data-aos="fade-right">Mastering the Bent-Over Row</h2>
        <p data-aos="fade-right">
          Your Ultimate Guide to Bent-Over Rows like a Pro
        </p>
        <div>
          <h3 data-aos="fade-right">Introduction</h3>
          <p data-aos="fade-right">
            Welcome to our guide on <strong>mastering the bent-over row</strong>
            ! In this article, we will provide you with essential tips and
            techniques to help you perform bent-over rows like a pro.
          </p>
          <h4 data-aos="fade-right">Benefits of Bent-Over Rows</h4>
          <ul data-aos="fade-right">
            <li>
              Building <strong>back strength</strong>, particularly in the lats
              and rhomboids
            </li>
            <li>
              Developing <strong>posterior chain muscles</strong>
            </li>
            <li>
              Improving <strong>posture and stability</strong>
            </li>
          </ul>
          <p data-aos="fade-right">Keep reading to learn more!</p>
          <h3 data-aos="fade-right">Technique</h3>
          <p data-aos="fade-right">
            Proper bent-over row technique is crucial to avoid injury and
            maximize results. Here are some key points to keep in mind:
          </p>
          <ol data-aos="fade-right">
            <li>
              Stand with your feet shoulder-width apart and knees slightly bent.
            </li>
            <li>
              Hinge forward at the hips while keeping your back straight and
              core engaged.
            </li>
            <li>
              Grasp the barbell with an overhand grip, hands slightly wider than
              shoulder-width apart.
            </li>
            <li>
              Pull the barbell up towards your lower chest, squeezing your
              shoulder blades together.
            </li>
            <li>Lower the barbell back down in a controlled manner.</li>
          </ol>
          <p data-aos="fade-right">
            Remember to maintain proper form throughout the movement.
          </p>
          <h3 data-aos="fade-right">Common Mistakes</h3>
          <p data-aos="fade-right">
            Avoid these common mistakes when performing bent-over rows:
          </p>
          <ul data-aos="fade-right">
            <li>Rounding your back</li>
            <li>Using excessive momentum or swinging to lift the weight</li>
            <li>Not fully engaging the back muscles</li>
          </ul>
          <p data-aos="fade-right">
            By addressing these mistakes, you can improve your bent-over row
            technique and achieve better results.
          </p>
          <h3 data-aos="fade-right">Conclusion</h3>
          <p data-aos="fade-right">
            Congratulations! You now have the knowledge to master the bent-over
            row exercise. Remember to{" "}
            <strong>start with lighter weights</strong> if you're a beginner and{" "}
            <strong>focus on maintaining proper form and control</strong>. Happy
            rowing!
          </p>
        </div>
      </div>
    </div>
  );
};
export default SubPage5;
