export default function Newsletter() {
  return (
    <div className="w-full mt-24">
      <section className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-thin mb-6">
            Everyone wants their cat to be happy and healthy and to look and
            feel their best. Now the same sanitary and functional benefits of
            today's advanced beauty and cat care.
          </p>
          <form>
            <input
              className="px-2 py-1 mr-4 border border-slate-950 rounded-md"
              type="email"
              placeholder="Enter your email here"
            />
            <button
              type="button"
              className="bg-orange-400 py-2 px-4 rounded-full text-white hover:bg-orange-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
