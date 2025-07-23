import "./stories-home.css"; // Import the CSS file

type Story = {
  id: number;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
};

const stories: Story[] = [
    {
      id: 1,
      name: "Dr. Sayegh",
      title: "Emergency Medicine Physician",
      description:
        "When I entered college, I was a resident assistant, and would occasionally take sick and inebriated students to the emergency room. Now looking back, it’s almost as if the universe was gently pushing me to practice emergency medicine. To me, medicine is more than just taking care of illnesses and diagnosing pathologies, but more so about the art in medicine, and the humanistic approach to treating ailments.",
      imageUrl: "../assets/dr.Sayegh-pic.jpg",
    },
    {
      id: 2,
      name: "Dr. Molina",
      title: "Emergency Medicine Physician",
      description:
        "You have to make a real effort to stay psychologically and physically healthy, and to use your time as wisely as possible. Try to enjoy the experience. It’s a challenging four years, but every now and then, take a step back and remember why you started this journey.",
      imageUrl: "../assets/dr.molina-pic.png",
    },
  ];
  
  

const StoriesHome: React.FC = () => {
  return (
    <div className="stories-home">
      <h1 className="stories-home__title">Featured Stories</h1>
      <div className="stories-home__grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img
              src={story.imageUrl}
              className="story-card__image"
            />
            <div className="story-card__content">
              <h2 className="story-card__name">{story.name}</h2>
              <p className="story-card__title">{story.title}</p>
              <p className="story-card__description">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesHome;
