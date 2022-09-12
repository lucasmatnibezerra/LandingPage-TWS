import React from "react";
import styles from "../style";
import book1 from "../public/book1.jpg";
import book2 from "../public/book2.jpg";
import book3 from "../public/book3.jpg";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-danger ss:text-[72px] text-[150px] text-white ss:leading-[100.8px] leading-[170px]">
            The next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">generation</span>{" "}
          </h1>
        </div>
        <p
          className={`${styles.paragraph} text-[#7d7daa] max-w-[550px] mt-5 text-[30px] font-[Hexi] font-bold`}
        >
          A series of four fantasy-adventure novels written by Andrew Peterson
          about the three Igiby children, Janner, Kalmar and Leeli.
        </p>
        <a href="https://www.wingfeathersaga.com/store">
          <button class="mt-4 font-danger bg-transparent hover:bg-[#f5f82c8f] text-[#F4F82C] hover:text-white py-2 px-4 border border-[#F4F82C] hover:border-transparent rounded">
            SHOP WINGFEATHER SAGA
          </button>
        </a>
        <div className="mt-4 justify-between flex space-x-4">
          {" "}
          <img
            className="cursor-pointer transition ease-in-out delay-150 hover:scale-110"
            src={book1}
            alt="book1"
            width={150}
            onClick={() =>
              window.open(
                "https://www.amazon.com.br/Edge-Dark-Sea-Darkness/dp/0525653562?",
                "_blank"
              )
            }
          />
          <img
            className="cursor-pointer transition ease-in-out delay-150 hover:scale-110"
            src={book2}
            alt="book2"
            width={150}
            onClick={() =>
              window.open(
                "https://www.amazon.com.br/North-Be-Eaten-Andrew-Peterson/dp/0525653570/ref=pd_lpo_1?pd_rd_i=0525653570&psc=1",
                "_blank"
              )
            }
          />
          <img
            className="cursor-pointer transition ease-in-out delay-150 hover:scale-110"
            src={book3}
            alt="book3"
            width={150}
            onClick={() =>
              window.open(
                "https://www.amazon.com.br/Monster-Hollows-Wingfeather-Saga-Book/dp/0525653589/ref=pd_bxgy_img_sccl_1/141-1225749-4339728?pd_rd_w=mre9N&content-id=amzn1.sym.57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_p=57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_r=A44XEQ94CFPWT76DP68J&pd_rd_wg=TzFxd&pd_rd_r=31871304-7776-43a2-8d23-337e3616b9b9&pd_rd_i=0525653589&psc=1",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
