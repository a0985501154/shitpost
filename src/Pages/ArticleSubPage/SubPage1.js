import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../Asset/Img/s1.jpg";
import image2 from "../../Asset/Img/B1.jpg";
import image3 from "../../Asset/Img/s2.png";
import image4 from "../../Asset/Img/s3.png";
import image5 from "../../Asset/Img/s4.gif";
import image6 from "../../Asset/Img/s5.png";

const SubPage1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <img
            src={image2}
            alt="Squat"
            className="img-fluid rounded mx-auto d-block"
            data-aos="fade-right"
            style={{ margin: "0 auto", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-4 align-self-center">
          <h1>Mastering the Squat</h1>
          <p>
            No matter your goals, squats should probably be at the core of your
            training program. Learn how to squat and how to start adding weight
            now.
          </p>
          <hr></hr>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row pt-3">
        <div className="col-md-2"></div>
        <div className="col-md-8 align-self-center fs-5">
          <p data-aos="fade-right">
            Most people should squat. Do you want bigger legs? You’d be
            hard-pressed to find a better exercise than the squat. Do you want
            to become more athletic while decreasing your injury risk on the
            field or the court? Squats should probably be at the core of your
            training program.
          </p>
          <p data-aos="fade-right">
            And of course, do you want to get stronger? If so, there are few
            exercises that can build or test head-to-toe strength as well as the
            squat (I’d put deadlifts on the same level, with push press close
            behind).
          </p>
          <p data-aos="fade-right">
            Of course, I probably don’t need to tell you any of that. If you
            sought out or happened upon this guide, you probably already know
            that the squat is pretty awesome. You’re primarily interested in
            improving your squat, squatting heavier weights, or building a set
            of legs that would get a nod of affirmation from Tom Platz.
          </p>
          <p data-aos="fade-right">If so, you're in luck.</p>
          <p data-aos="fade-right">
            Squats come in all shapes and sizes, and can be used for a variety
            of training goals. This guide is going to break down the movement
            in-depth, teach you how to optimize your squat technique, and teach
            you how to start maximizing your squat training.
          </p>
          <img src={image1} className="rounded" data-aos="fade-right"></img>
          <h1 data-aos="fade-right">Super Basic Physics</h1>
          <p data-aos="fade-right">
            The first is <b>force</b>. Force is the product of mass and
            acceleration, typically calculated in Newtons (one Newton is the
            force it takes to accelerate a 1kg mass at a rate of 1m/sec
            <sup>2</sup>). Most important for our purposes here, force is
            linear: it describes things that are being pulled or pushed in a
            straight line.
          </p>
          <p data-aos="fade-right">
            So, let’s say you have a 300kg bar on your back. The 300kg bar
            represents the mass component of force. If you weren’t supporting
            the bar, it would accelerate downward at 9.8m/sec
            <sup>2</sup> (due to gravity), so the bar is exerting 300kg x
            9.8m/sec<sup>2</sup> = 2940N of force upon your body. The direction
            of the force is the direction that gravity is pulling: straight
            down. Similarly, when our muscles contract, they exert a force
            pulling one end of the muscle straight toward the other end.
          </p>
          <img src={image3} className="rounded" data-aos="fade-right"></img>
          <p data-aos="fade-right">
            The second is <b>moment</b>. Moment is force applied about an axis,
            typically calculated in Newton-Meters – the force applied,
            multiplied by the distance from the axis perpendicular to the
            direction the force is being applied. While force is linear, moment
            is rotational.
          </p>
          <img src={image4} className="rounded" data-aos="fade-right"></img>
          <p data-aos="fade-right">
            So, let’s say you’re curling a 20kg barbell. Your upper arm is
            straight down by your side, and your forearm, which is 30cm long, is
            parallel to the floor. You’d calculate the force the barbell is
            exerting in the same manner as the example above: 20kg x 9.8m/sec
            <sup>2</sup> = 196N of force, directed straight downward. Then, to
            calculate the moment the barbell is exerting at the elbow, you’d
            multiply 196N by the distance between the barbell and your elbow
            (called the moment arm) in meters: 196N x 0.30m = 58.8Nm. Since this
            moment is exerted downward, which would extend the elbow with the
            forearm in this position, we’d term this an extensor moment.
          </p>
          <p data-aos="fade-right">
            Moments imposed by a load on your musculoskeletal system are called
            external moments, and moments produced by your muscles pulling
            against your bones are called internal moments. Internal moments are
            calculated the same way external moments are. The force component is
            the contractile force of the muscle, and the moment arm is the
            distance a muscle attaches from the center (axis of rotation) of the
            joint it’s moving. So, for example, if the patellar tendon (which
            transmits the force of the quadriceps to the tibia) inserts 5cm from
            the center of the knee joint, and the quads contract hard enough to
            exert 10,000N of force perpendicular to the tibia, the internal
            extensor moment would be 10,000N x 0.05m = 500Nm.
          </p>
          <p data-aos="fade-right">
            To produce movement, your muscles contract. By doing so, they
            produce a linear force, pulling on bones that act as levers,
            producing flexor or extensor moments at the joints they cross, with
            joints acting as the axes of rotation. In the case of the squat,
            you’re primarily trying to produce extensor moments at the knee and
            hip that exceed the flexor moments at those joints imposed by both
            the bar and your own bodyweight. If you can do that, you exert a
            force on the bar that exceeds the force the bar is exerting on your
            body, and voíla! A successful squat.
          </p>
          <p data-aos="fade-right">
            Putting all of this together, there are a few very basic principles
            to take away from this:
          </p>
          <ol className="px-5">
            <li data-aos="fade-right">
              In the squat, the load (the barbell and your body weight) applies
              a downward force that exerts external flexor moments at your knee
              and hip, and an external dorsiflexion moment at your ankle.
            </li>
            <li data-aos="fade-right">
              The size of the external flexor moment you have to overcome to
              lift a weight depends on two things:
              <ul data-aos="fade-right">
                <li>The load itself</li>
                <li>The length of the moment arm</li>
              </ul>
            </li>
            <li data-aos="fade-right">
              If the load increases and the moment arm stays the same length, if
              the load stays the same and the moment arm gets longer, or if the
              load increases and the moment arm gets longer, the external flexor
              moment that your muscles must overcome increases. This is why
              lifting heavier weights is harder than lifting lighter weights and
              why people with longer limbs generally have a tougher time
              squatting a given load than people with shorter limbs.
            </li>
            <li data-aos="fade-right">
              The two factors that determine whether your muscles can produce
              large enough internal extensor moments to lift a load are:
              <ul>
                <li>The attachment points of the muscles</li>
                <li>The force with which they can contract</li>
              </ul>
            </li>
            <li data-aos="fade-right">
              Attachment points play a huge role because muscles generally
              attach very close to the joint they move, so small variations can
              make a big difference. For example, studies have shown that the
              patellar tendon moment arm can vary from 4cm to 6cm. To produce a
              knee extensor moment of 500Nm like the example above, the quads of
              someone with a 6cm moment arm would have to contract hard enough
              to exert 8333N of force perpendicular to the tibia, whereas the
              quads of someone with a 4cm moment arm would have to contract with
              50% more force to produce the exact same knee extensor moment –
              12,500N!
            </li>
            <li data-aos="fade-right">
              Unfortunately, you can’t change muscle attachment points, so the
              only factor within your control is increasing contractile force.
              There are only two ways to do that:
              <ul data-aos="fade-right">
                <li>
                  Increase your skill as a squatter so your current muscle mass
                  can produce more force during the movement
                </li>
                <li>Add more muscle!</li>
              </ul>
            </li>
          </ol>
          <p data-aos="fade-right">
            Things get just a little more complicated than that, but this should
            give you a good enough grasp on the terminology we’ll be using
            moving forward. If this is still hazy for you, you can download a{" "}
            <a
              href="https://openstax.org/books/college-physics/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units"
              target="_blank"
              rel="noopener noreferrer"
            >
              free physics textbook here
            </a>{" "}
            (legally) that’s actually exceptionally good.
          </p>
          <h1 data-aos="fade-right">Anatomy</h1>
          <p data-aos="fade-right">
            The squat is a full-body movement, so there is a multitude of
            muscles and bones involved; but to simplify things, we really only
            need to look at four bones or groups of bones, seven muscles or
            groups of muscles, and four joints or groups of joints. This
            provides us with the basic understanding of the tissues that are
            carrying out all that physics stuff in the last section, and
            provides us with some basic information that will help us discuss
            the biomechanics of the squat.
          </p>
          <h2 data-aos="fade-right">Spine</h2>
          <div className="row">
            <div className="col-md-10">
              <p data-aos="fade-right">
                The spine runs from the base of your head to the top of your
                pelvis and is made up of 24 vertebrae. The vertebrae are split
                into three general sections: seven cervical vertebrae in your
                neck, twelve thoracic vertebrae running from the base of your
                neck to the bottom of your rib cage, and five lumbar vertebrae
                running from the base of your rib cage to the top of your
                pelvis.
              </p>
              <p data-aos="fade-right">
                Not much movement is allowed at the junction between each pair
                of vertebrae, but small movements add up to allow for pretty
                long ranges of flexion, extension, rotation, and lateral flexion
                up and down the spine.
              </p>
            </div>
            <div className="col-md-2">
              <img
                src={image5}
                alt="Squat"
                className="img-fluid rounded mx-auto d-block"
                data-aos="fade-right"
                style={{ margin: "0 auto", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <p data-aos="fade-right">
            The spine naturally has three major curves: a lordotic curve
            (rounded inward) for the lumbar spine, a kyphotic curve (rounded
            outward) for the thoracic spine, and a lordotic curve for the
            cervical spine. When we talk about spinal flexion or extension,
            we’re talking about flexion or extension relative to these baseline
            curvatures. When the spine bends forward relative to these baseline
            curvatures, it’s flexed. When it moves from a flexed position back
            toward these baseline curvatures, it’s extending. When it moves
            toward an arched position past these natural curvatures, it’s
            hyperextending. So, for example, when the thoracic spine is fully
            flat, that means it’s hyperextended, but when it’s super hunched
            over, it’s flexed. When the lumbar spine is fully flat, that means
            it’s flexed, but when it’s super arched, it’s hyperextended.
          </p>
          <p data-aos="fade-right">
            Between each pair of vertebrae is a disc that cushions the spine.
            These discs hold up really well to compressive forces (pressing the
            vertebrae together as a result both of the load and the contraction
            of your spinal erectors) but can have some issues with shear forces
            (which attempt to slide the vertebrae past each other as a result of
            the load, your degree of forward lean, and the degree of spinal
            flexion taking place). As long as your spine doesn’t flex, it should
            be fine if you don’t have pre-existing back issues.
          </p>
          <img src={image6} className="rounded" data-aos="fade-right"></img>
          <p data-aos="fade-right">
            In a properly performed squat, there shouldn’t be a meaningful
            amount of flexion or hyperextension taking place. Your spine should
            remain rigid and extended to transfer force from your legs and hips
            into the bar.
          </p>
          {/* pageContent */}
        </div>

        
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default SubPage1;
