export default function Blog() {
  return (
    <section className="w-full mb-12 px-8">
      <div className="max-w-4xl mx-auto p-16">
        <h1 className="text-5xl sm:text-6xl font-semibold text-center font-playfair">
          Happy Cats 101: Tips and Tales for Healthy Kitties
        </h1>
      </div>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Top Reads</h2>
        <hr />
        <div className="grid sm:grid-cols-3 gap-4 py-6 justify-center">
          <TopRead
            title="The Purr-fect Diet: Feeding Your Cat for Optimal Health"
            imageUrl="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <TopRead
            title="Indoor Adventures: Keeping Your Cat Stimulated and Happy"
            imageUrl="https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <TopRead
            title="Emergency Preparedness for Cat Owners: What You Need to Know"
            imageUrl="https://images.pexels.com/photos/866496/pexels-photo-866496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium mb-2">Latest</h2>
        <hr />
        <div className="grid gap-y-6 divide-y">
          <LatestBlog
            title="Senior Cats Unleashed: Navigating Care in Their Golden Years"
            content="Aging gracefully is an art, and cats are no exception. This blog explores the unique needs of senior cats, covering topics like nutrition, exercise, and creating a comfortable environment for your aging feline friend."
            date="Mar 5, 2024"
            imageUrl="https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <LatestBlog
            title="The Art of Cat Grooming: Tips for a Purr-fectly Well-Kept Kitty"
            content="Grooming is not just for show – it's a vital aspect of your cat's health. Discover easy grooming tips, from brushing techniques to nail trims, ensuring your cat stays clean, comfortable, and looking fabulous."
            date="Mar 4, 2024"
            imageUrl="https://images.pexels.com/photos/1234350/pexels-photo-1234350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <LatestBlog
            title="Cat-astrophe Averted: Emergency First Aid for Cats"
            content="Be prepared for the unexpected! Learn essential first aid tips for handling common cat emergencies. From minor injuries to recognizing signs of distress, this blog provides practical guidance to keep your cat safe and sound."
            date="Mar 4, 2024"
            imageUrl="https://images.pexels.com/photos/1046430/pexels-photo-1046430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <LatestBlog
            title="The Scoop on Catnip: A Cat's Favorite Herb"
            content="Cats love to explore, even indoors! Learn creative ways to enrich your cat's environment, from DIY toys to interactive games. Discover how providing mental and physical stimulation can prevent boredom and contribute to a content and well-adjusted kitty."
            date="Mar 3, 2024"
            imageUrl="https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <button className="mx-auto block my-8 px-4 py-1 bg-slate-200 rounded-lg font-medium">
          Load More
        </button>
      </div>
    </section>
  );
}

function TopRead(props: { imageUrl: string; title: string }) {
  return (
    <div className="hover:cursor-pointer p-4 hover:scale-105 ease-in-out duration-200 max-w-sm">
      <img className="mb-2" src={props.imageUrl} alt="Blog Picture" />
      <p className="font-semibold">{props.title}</p>
    </div>
  );
}

function LatestBlog(props: {
  imageUrl: string;
  title: string;
  content: string;
  date: string;
}) {
  return (
    <article className="hover:cursor-pointer p-4 grid grid-cols-4 justify-between items-center gap-x-4">
      <div>
        <img src={props.imageUrl} alt="Blog Picture" />
      </div>

      <div className="col-span-3">
        <p className="font-semibold mb-1">{props.title}</p>
        <p className="font-light text-sm mb-2">{props.content}</p>
        <p className="font-light text-slate-700 text-xs">{props.date}</p>
      </div>
    </article>
  );
}
