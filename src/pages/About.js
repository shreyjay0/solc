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
  };
  return <GradientCard gradData={gradData}></GradientCard>;
};

export default About;
