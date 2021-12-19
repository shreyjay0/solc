import GradientCard from "../components/GradientCard";

const About = () => {
  const gradData = {
    title: "About",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
        tincidunt nisi, eget congue nisl nisi eu ipsum.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Pellentesque euismod, urna eu
        tincidunt consectetur, nisi nisl tincidunt nisi, eget congue nisl
        nisi eu ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
        tincidunt nisi, eget congue nisl nisi eu ipsum.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Pellentesque euismod, urna eu
        tincidunt consectetur, nisi nisl tincidunt nisi, eget congue nisl
        nisi eu ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
        tincidunt nisi, eget congue nisl nisi eu ipsum.
        <br /> <br />
        lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.`,
    gradOpt:
      "linear-gradient(80deg, rgba(37, 77, 233, 0.5) -5.49%, rgba(40, 244, 129, 0.5) 81.15%, rgba(64, 255, 58, 0.45) 104.99%)",
  };
  return <GradientCard gradData={gradData}></GradientCard>;
};

export default About;

// background: linear-gradient(-95deg, #67269D 0%, #23BF8C 100%);
