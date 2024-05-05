const Footer = () => {
  return (
    <div className="mt-20">
      <footer class="flex flex-col items-center  bg-sky-900 text-surface text-white">
        <div class="container p-6">
          <div class="grid gap-4 lg:grid-cols-2">
            <div class="mb-6 md:mb-0">
              <h5 class="mb-2 font-medium uppercase">LungoGo</h5>

              <p class="mb-4">
                LungoGo adalah sebuah platform web yang dibuat untuk membantu para pelancong merencanakan dan menyusun perjalanan mereka dengan lebih mudah. Dengan LungoGo, Anda dapat menemukan destinasi wisata yang menarik, merencanakan
                rute perjalanan, dan mendapatkan informasi lengkap tentang tempat-tempat yang akan Anda kunjungi.
              </p>
            </div>

            <div class="mb-6 md:mb-0">
              <h5 class="mb-2 font-medium uppercase">Created by:</h5>

              <p class="mb-4">Farhan Wijonarko X Dbimbing</p>
            </div>
          </div>
        </div>
        <div class="bg-sky-950 gap-4 w-full flex  items-center justify-center">
          <div class="flex gap-1 py-4 text-center">
            © 2024 Copyright : <p>Farhan Wijonarko</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
