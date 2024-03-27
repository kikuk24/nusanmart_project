"use client";
import { useRouter } from "next/navigation";
export default function Auth() {
  const router = useRouter();
  return (
    <div className="flex justify-center mt-8">
      <div style={{ minWidth: '30%' }}>
        <div className="shadow-lg flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://kikukcode.com/nusanmart-logo.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Masuk ke Akun anda</h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2 mb-2">
                    <input
                      id="password"
                      placeholder="Password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
                  </div>
                </div>
                <div className="flex justify-between my-2">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    <label htmlFor="remember-me" className="block text-sm font-medium leading-6 text-gray-900">
                      Ingat Saya
                    </label>
                  </div>
                  <p className="block text-sm font-medium leading-6 text-gray-900">Lupa Password</p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-100 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm focus-visible:ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-red-900 dark:text-red-300 text-red-800">Login
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Belum punya Akun?{' '}
              <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" onClick={() => router.push('/auth/register')}>
                Daftar
              </span>
              {' '}
              gratis

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}