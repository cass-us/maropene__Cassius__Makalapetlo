import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeaderContent";
import { Line } from "rc-progress";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const skilldata = [
  {
    label: "FRONT END",
    data: [
      { skillName: "HTML5", percentage: "90" },
      { skillName: "CSS3", percentage: "70" },
      { skillName: "Tailwind", percentage: "70" },
      { skillName: "React.js", percentage: "80" },
    ],
  },
  {
    label: "BACK END",
    data: [
      { skillName: "Node.js", percentage: "75" },
      { skillName: "Java", percentage: "90" },
      { skillName: "C#", percentage: "65" },
    ],
  },
  {
    label: "DATABASE",
    data: [
      { skillName: "MySQL", percentage: "80" },
      { skillName: "PostgreSQL", percentage: "75" },
      { skillName: "SQLite", percentage: "70" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content__wrapper">
        {skilldata.map((item, index) => (
          <Animate
            key={index}
            play
            duration={1.2}
            delay={index * 0.5 + 0.3} // staggered animation
            start={{ opacity: 0, transform: "translateX(-50px)" }}
            end={{ opacity: 1, transform: "translateX(0)" }}
          >
            <div className="skills__content__wrapper__inner-content">
              <h3 className="skills__category-text">{item.label}</h3>
              <div>
                {item.data.map((skillItem, x) => (
                  <div className="progressWrapper" key={x}>
                    <p className="skillName">{skillItem.skillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeWidth={6}
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth={4}
                      strokeLinecap="round"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Skills;
