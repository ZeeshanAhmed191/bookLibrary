
import MissionImage from "../assets/mission.png"
const Mission = () => {
  return (
    <section id="mission" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-amber-600 uppercase tracking-[0.25em] font-semibold">
            Our Mission
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900 leading-tight">
            Making Knowledge Accessible To Everyone.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Kitab Ghar was created with one simple vision: make reading
            effortless and accessible for everyone. Whether you love Urdu
            novels, English classics, Arabic literature or translated works,
            you'll find everything in one place.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            We continuously expand our collection, improve the reading
            experience, and build features that help readers discover their next
            favourite book.
          </p>
        </div>

        <div>
          <img src={MissionImage} className="rounded-3xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
