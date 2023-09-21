import trophy from "../../assets/images/trophy.svg";
import awardStand1 from "../../assets/images/Rectangle 19.svg";
import awardStand2 from "../../assets/images/Rectangle 20.svg";
import awardStand3 from "../../assets/images/Rectangle 21.svg";
import award1 from "../../assets/images/bronze_medal 1.svg";
import award2 from "../../assets/images/gold_medal 1.svg";
import award3 from "../../assets/images/silver_medal 1.svg";
import Star from "../reusables/Star";

export default function Section7() {
  return (
    <div className="section-7-items flex flex-col w-full py-12">
      <div className="top flex lg:justify-end sm:justify-center mb-12 lg:mx-40">
        <h1>
          Prizes and <span className="colored-text">Rewards</span>
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        <div className="box-1 flex items-center lg:w-2/4 sm:w-full sm:h-auto lg:h-full justify-center mb-8">
          <img src={trophy} alt="trophy" />
        </div>

        <div className="box-2 flex items-end flex-row lg:w-2/4 sm:w-full sm:h-2/4 lg:h-full justify-around mt-12">
          <div className="award-1 mx-2">
            <img src={awardStand1} alt="stand" />
            <img src={award3} alt="silver-medal" className="medal" />
            <div className="award-message">
              <h1 className="head-1 text-center font-bold">2nd</h1>
              <p className="text-center my-2">Runner</p>
              <h1 className="head-2 text-center font-bold colored-text">
                N300,000
              </h1>
            </div>
          </div>

          <div className="award-2 mx-2 h-auto">
            <img src={awardStand2} alt="stand" />
            <img src={award2} alt="gold-medal" className="medal" />
            <div className="award-message">
              <h1 className="head-1 text-center">1st</h1>
              <p className="text-center my-2">Runner</p>
              <h1 className="head-2 text-center font-bold colored-text-2">
                N400,000
              </h1>
            </div>
          </div>

          <div className="award-3 mx-2">
            <img src={awardStand3} alt="stand" />
            <img src={award1} alt="silver-medal" className="medal" />
            <div className="award-message">
              <h1 className="head-1 text-center font-bold">3rd</h1>
              <p className="text-center my-2">Runner</p>
              <h1 className="head-2 text-center font-bold colored-text">
                N150,000
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Star top="680%" left="5%" color="#d434fe" />
      <Star top="720%" left="40%" color="#ffffff" />
      <Star top="750%" left="90%" color="#ffffff" />
      <Star top="760%" left="5%" color="#ffffff" />
      <Star top="765%" left="75%" color="darkgray" />
    </div>
  );
}
