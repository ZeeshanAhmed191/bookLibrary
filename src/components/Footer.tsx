import {
  BookOpen,
  Mail,
 Phone,
  MapPin,
  Globe,
} from "lucide-react";
const Footer = ()=>{
  return (


<footer className="bg-primary text-white ">

  <div className="max-w-7xl mx-auto px-4 py-14">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* About */}

      <div>

        <div className="flex items-center gap-2">

          <BookOpen className="w-8 h-8" />

          <h2 className="text-2xl font-bold">
            UrduKitabain
          </h2>

        </div>

        <p className="mt-4 text-gray-300 leading-7">

          Discover thousands of Urdu books,
          novels, poetry, Islamic books,
          history and much more.

        </p>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="font-bold text-xl mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-300">

          <li className="hover:text-white cursor-pointer">
            Home
          </li>

          <li className="hover:text-white cursor-pointer">
            Books
          </li>

          <li className="hover:text-white cursor-pointer">
            Categories
          </li>

          <li className="hover:text-white cursor-pointer">
            Contact
          </li>

        </ul>

      </div>

      {/* Categories */}

      <div>

        <h3 className="font-bold text-xl mb-4">
          Popular Categories
        </h3>

        <ul className="space-y-3 text-gray-300">

          <li>Novels</li>
          <li>Poetry</li>
          <li>Islamic Books</li>
          <li>History</li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <h3 className="font-bold text-xl mb-4">
          Contact
        </h3>

        <div className="flex items-center gap-2 text-gray-300">

          <Mail className="w-5 h-5" />

          <span>support@urdukitabain.com</span>

        </div>

      </div>

    </div>

    {/* Divider */}

    <div className="border-t border-green-700 my-10"></div>

    {/* Bottom */}

    <div className="flex flex-col md:flex-row justify-between items-center gap-5">

      <p className="text-gray-300 text-center">
        © 2026 UrduKitabain. All Rights Reserved.
      </p>

      <div className="flex gap-4">

        <Phone className="cursor-pointer hover:text-yellow-400 transition" />

        <MapPin className="cursor-pointer hover:text-yellow-400 transition" />

        <Globe className="cursor-pointer hover:text-yellow-400 transition" />

      </div>

    </div>

  </div>

</footer>
  )
}
export default Footer