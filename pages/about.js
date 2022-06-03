import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout title='About'>
      <div>
        <img
          src='https://picsum.photos/id/254/960/300'
          style={{ width: '100%' }}
        />
        <h1>About page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          odit assumenda? Eaque minus libero cumque voluptatum tenetur, quidem
          similique laborum voluptas enim vero explicabo odit laboriosam!
          Quisquam eligendi voluptates nobis?
        </p>
        <p>version 1.0.0</p>
      </div>
    </Layout>
  );
};

export default About;
