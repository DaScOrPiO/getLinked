import Star from "../reusables/Star";
import Circle from "../reusables/Circle";
import CircleMobile from "../reusables/CircleMobile";
import CircleMobileX from "../reusables/CircleMobileX";

export default function Section6() {
  return (
    <div className="section-6-items flex flex-col w-full py-8 flex-wrap justify-center">
      <div className="top flex flex-col w-full justify-center items-center mb-12">
        <h1>Timeline</h1>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div
        className="box-2 flex flex-col justify-center 
      items-center flex-wrap w-full mt-6"
      >
        <div className="annconcement-container border-rule flex lg:flex-row sm:flex-col lg:w-3/4 sm:w-full mb-12 
        sm:relative sm:mb-12 flex-wrap">
          <div className="topic border-right flex flex-col items-start word-wrap lg:w-2/4 sm:w-full px-10 relative">
            <h1 className="colored-text">Hackathon Announcement</h1>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
            <Circle number="1" bottom="-6vh" left="96%" />
          </div>

          <div className="date flex items-end lg:w-2/4 sm:w-full px-10">
            <h1 className="colored-text">November 18 2023</h1>
          </div>

          <CircleMobile number="1" bottom="-4vh" left="-2.2%" />
          <CircleMobileX number="1" bottom="-4vh" left="-5%" />
        </div>

        <div className="annconcement-container border-rule flex lg:flex-row sm:flex-col lg:w-3/4 sm:w-full mb-12 
        sm:relative sm:mb-12 flex-wrap-reverse">
          <div className="date border-right flex items-end lg:w-2/4 sm:w-full px-10 relative">
            <h1 className="colored-text">November 18 2023</h1>
            <Circle number="2" bottom="-6vh" left="96%" />
          </div>

          <div className="topic flex flex-col items-start word-wrap lg:w-2/4 sm:w-full px-10">
            <h1 className="colored-text">Team Registeration begins</h1>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>

          <CircleMobile number="2" bottom="-4vh" left="-2.2%" />
          <CircleMobileX number="2" bottom="-4vh" left="-5%" />
        </div>

        <div className="annconcement-container border-rule flex lg:flex-row sm:flex-col lg:w-3/4 sm:w-full mb-12 
        sm:relative sm:mb-12 flex-wrap">
          <div className="topic border-right flex flex-col items-start word-wrap lg:w-2/4 sm:w-full px-10 relative">
            <h1 className="colored-text">Teams Registration ends</h1>
            <p>Interested Participants are no longer Allowed to register</p>
            <Circle number="3" bottom="-6vh" left="96%" />
          </div>

          <div className="date flex items-end lg:w-2/4 sm:w-full px-10">
            <h1 className="colored-text">November 18 2023</h1>
          </div>

          <CircleMobile number="3" bottom="-4vh" left="-2.2%" />
          <CircleMobileX number="3" bottom="-4vh" left="-5%" />
        </div>

        <div className="annconcement-container border-rule flex lg:flex-row sm:flex-col lg:w-3/4 sm:w-full mb-12 
        sm:relative sm:mb-12 flex-wrap-reverse">
          <div className="date border-right flex items-end lg:w-2/4 sm:w-full px-10 relative">
            <h1 className="colored-text">November 18 2023</h1>
            <Circle number="4" bottom="-6vh" left="96%" />
          </div>

          <div className="topic flex flex-col items-start word-wrap lg:w-2/4 sm:w-full px-10">
            <h1 className="colored-text">
              Announcement of the accepted teams and ideas
            </h1>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>

          <CircleMobile number="4" bottom="-4vh" left="-2.2%" />
          <CircleMobileX number="4" bottom="-4vh" left="-5%" />
        </div>

        <div className="annconcement-container border-rule flex lg:flex-row sm:flex-col lg:w-3/4 sm:w-full mb-12 
        sm:relative sm:mb-12 flex-wrap">
          <div className="topic border-right flex flex-col items-start word-wrap lg:w-2/4 sm:w-full px-10 relative">
            <h1 className="colored-text">
              Getlinked Hackathon 1.0 Offically Begins
            </h1>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
            <Circle number="5" bottom="-6vh" left="96%" />
          </div>

          <div className="date flex items-end lg:w-2/4 sm:w-full px-10">
            <h1 className="colored-text">November 18 2023</h1>
          </div>

          <CircleMobile number="5" bottom="-4vh" left="-2.2%" />
          <CircleMobileX number="5" bottom="-4vh" left="-5%" />
        </div>

        <div className="annconcement-container border-rule flex lg:flex-row sm:flex-col lg:w-3/4 sm:w-full mb-12 
        sm:relative sm:mb-12 flex-wrap-reverse">
          <div className="date border-right flex items-end lg:w-2/4 sm:w-full px-10 relative">
            <h1 className="colored-text">November 18 2023</h1>
            <Circle number="6" bottom="-6vh" left="96%" />
          </div>

          <div className="topic flex flex-col items-start word-wrap lg:w-2/4 sm:w-full px-10">
            <h1 className="colored-text mb-3">Demo Day</h1>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>

          <CircleMobile number="6" bottom="-4vh" left="-2.2%" />
          <CircleMobileX number="6" bottom="-4vh" left="-5%" />
        </div>
      </div>

      <Star top="540%" left="20%" color="#903aff" />
      <Star top="580%" left="90%" color="#ffffff" />
      <Star top="650%" left="5%" color="darkgray" />
    </div>
  );
}
