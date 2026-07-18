import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div
        className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden"
        style={{
          backgroundImage: "url('/img/contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-center relative z-10">
          <p className="mb-10 font-general text-[10px] uppercase tracking-wider text-white/70">
            Work With Urban Lead
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild something <br /> the world <br /> rem<b>e</b>mbers."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="start your project" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
