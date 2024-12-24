const App = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sol Kolon */}
      <div className="flex-1 bg-white flex flex-col justify-center px-12">
        <h1 className="text-gray-800 text-6xl font-bold mb-6 tracking-widest">
          LOGIN
        </h1>
        <form className="space-y-6">
          {/* Kullanıcı Adı */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Username"
            />
          </div>
          {/* Şifre */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Password"
            />
          </div>
          {/* Login Butonu */}
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800 transition"
          >
            LOGIN
          </button>
        </form>
        {/* OR Separator */}
        <div className="flex items-center justify-between mt-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        {/* Sosyal Medya */}
        <div className="flex justify-center space-x-4 mt-4">
          <img
            src="/images/image-1.png"
            alt="Google Icon"
            className="w-8 h-8 mr-10"
          />
          <img
            src="/images/image-2.png"
            alt="Facebook Icon"
            className="w-8 h-8"
          />
        </div>
        {/* Alt Bilgi */}
        <p className="text-center text-gray-600 text-sm mt-8">
          Not yet registered,
          <a href="#" className="hover:underline">
            Click here to sign up
          </a>
        </p>
      </div>
      {/* Sağ Kolon */}
      <div className="flex-1 bg-gray-100 rounded-tl-[80px] rounded-bl-[80px] overflow-hidden relative">
        <img
          src="/images/image-3.png"
          alt="Parrot"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
export default App
/*
flex-1 :  flex container (esnek kapsayıcı) -> orantılı olarak esnemesini sağlar

rounded --> tüm köşeleri yuvarlatıyor
rounded-tl-[80px] : elemanın sol üst köşesini (tl = top-left corner) 80px kadar yuvarlatır. 

rounded-bl-[80px] : sol alt köşesi (bottom-left corner) yuvarlar

overflow-hidden : ieçrik taşarsa taşan kısmı gizler, içerik bu alanın dışına taşarsa, gizlenir.

realtive : göreli konumlandırır --> relative positioning
*/
