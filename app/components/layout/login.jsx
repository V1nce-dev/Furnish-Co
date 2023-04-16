export default function Login() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Login</h1>
      <form>
        <label className="block mb-2">Username:</label>
        <input className="border w-full p-1 mb-4 rounded-md" type="text" />

        <label className="block mb-2">Password:</label>
        <input className="border w-full p-1 mb-4 rounded-md" type="password" />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
