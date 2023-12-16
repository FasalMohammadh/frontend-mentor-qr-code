import QrCodeImage from "@/assets/images/qr-code.png";

function Home() {
  return (
    <div class="bg-white p-4 rounded-3xl flex flex-col gap-5 pb-10 shadow-[2px_2px_8px_4px_rgba(0,0,0,0.05)] w-[320px]">
      <img
        src={QrCodeImage}
        alt="qr code"
        width={288}
        height={288}
        class="rounded-xl aspect-square"
      />
      <div class="text-center w-full px-3">
        <h1 class="text-xl font-bold text-body-text-primary mb-4">
          Improve your front-end skills by building projects
        </h1>
        <p class="text-body-text-secondary">
          Scan the QR code fo visit Frontend Mentor and fake your coding skills
          fo the next level
        </p>
      </div>
    </div>
  );
}

export default Home;
