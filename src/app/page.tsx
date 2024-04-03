import { CallstackIcon } from "@/svgs/callstackIcon";
import { MetaIcon } from "@/svgs/metaIcon";
import Image from "next/image";
import * as text from "@/statics/text";
import { Button } from "@/components/Button";
import { ButtonAnimated } from "@/components/Button-Animated";
import { SubHeading } from "@/components/SubHeading";

export default function Home() {
  return (
    <div className="">
      <section className="bg-darkBlue pt-20 pb-8 text-white rounded-b-[50px]">
        <div className="container  flex flex-col items-center gap-6 mx-auto">
          <h1 className="text-5xl text-center w-[460px] leading-[80px]">{text.heroHeading}</h1>
          <Image
            src="/image/hero.jpg"
            width={600}
            height={600}
            className="rounded-full w-[480px] h-[480px]"
            alt="Hero image"
          />
          <ButtonAnimated padding="lg">TICKET LOTTERY</ButtonAnimated>
          <ButtonAnimated padding="lg">FREE STREAMING</ButtonAnimated>
        </div>
      </section>
      <section className="relative z-10">
        <div className="absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-lightOrange rounded-full -z-10" />
        <div className="container py-12">
          <div className="flex flex-col gap-6 pb-16 z-10 realtive">
            <span className="font-thin text-lightBlue text-sm ">About</span>
            <SubHeading>{text.aboutHeading}</SubHeading>
          </div>
          <p className="text-sm z-10">{text.aboutText}</p>
          <div className="grid grid-cols-2 gap-y-4 w-[400px] mx-auto mt-16">
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-3xl font-bold">40K</h3>
              <span className="text-sm font-thin">Online attendees</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-3xl font-bold">20+</h3>
              <span className="text-sm font-thin">Speakers</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-3xl font-bold">700+</h3>
              <span className="text-sm font-thin">In-person a ttendees</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-3xl font-bold">2</h3>
              <span className="text-sm font-thin">Days</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-mainOrange px-6 py-14 rounded-[40px]">
        <div className="contaonier flex flex-col gap-3">
          <span className="font-thin text-sm">Newsletter</span>
          <SubHeading>{text.newsLetterHeading}</SubHeading>
          <p className="text-sm">{text.newsLetterTest}</p>
          <input
            type="text"
            className="py-4 w-full rounded-full px-6"
            placeholder="Enter your email"
          />
          <Button width="100%" padding="lg">
            SUBSCRIBE
          </Button>
          <span className="text-[10px] text-center">{text.newsLetterConfermation}</span>
        </div>
      </section>
      <section className="py-10">
        <div className="container flex flex-col gap-2">
          <span className="text-lightBlue text-sm font-thin">Speakers</span>
          <SubHeading>{text.speakersHeading}</SubHeading>
          <p className="text-sm">{text.speakersText}</p>
          <h4 className="font-bold">
            Submit your talk before the call for proposals (CFP) closes on Feb 28.
          </h4>
          <ButtonAnimated padding="lg">SUBMIT TALK</ButtonAnimated>
        </div>
      </section>

      <section>sliders</section>
      {/* Ticket section */}
      <section>
        <div className="container flex flex-col gap-2 bg-darkBlue text-white py-12 rounded-[50px]">
          <span className="text-lightBlue text-sm font-thin">Tickets</span>
          <SubHeading>{text.ticketsHeading}</SubHeading>
          <h5 className="text-2xl mt-4">Ticket lottery open until February 28th.</h5>
          <p className="text-xs leading-6">{text.ticketsText}</p>
          <div className="flex flex-col gap-3 mt-3">
            {text.ticketsAccodionTexts.map((text) => (
              <div key={text.text} className="flex flex-col gap-3">
                <p className="text-xs leading-6">{text.text}</p>
                <ButtonAnimated padding="lg">{text.heading}</ButtonAnimated>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Venue */}

      <section className="container py-10 flex flex-col gap-2">
        <span className="text-lightBlue text-sm font-thin">Venue</span>
        <div className="w-[70%]">
          <SubHeading>{text.venueHeading}</SubHeading>
        </div>

        <Image
          src="/image/vegas-1.jpg"
          width={400}
          height={400}
          className="rounded-full w-[400px] h-[400px] mx-auto"
          alt="Image of los vegas"
        />
        <p className="text-xs my-6">{text.venueText}</p>
        <span className="text-xs mb-1 block">Enjoy $178/night group rate for conference stay.</span>
        <Button padding="lg">Book Hotel</Button>
      </section>
      <section className="container py-10 flex flex-col gap-6">
        <span className="text-lightBlue text-sm font-thin">Community Vibe</span>
        <SubHeading>{text.communityHeading}</SubHeading>
        {text.communityTexts.map((text) => (
          <div key={text.text} className="flex flex-col gap-4">
            <h4 className="text-mainOrange text-2xl">{text.sub}</h4>
            <p className="text-xs">{text.text}</p>
          </div>
        ))}
        <Image
          src="/image/vegas-2.jpg"
          width={500}
          height={500}
          alt="image of community"
          className="rounded-full w-[400px] h-[400px] mx-auto"
        />
      </section>
      <section className="container py-10">
        <span className="text-lightBlue text-sm font-thin mb-4 mt-4 block">Organizers</span>
        <SubHeading>{text.orgHeading}</SubHeading>
        <div className="flex flex-col gap-10 mt-10">
          {text.orgTexts.map((org) => {
            return (
              <div key={org.text} className="flex flex-col gap-4 items-start">
                {org.icon === "MetaIcon" ? <MetaIcon /> : <CallstackIcon />}
                <p className="text-xs">{org.text}</p>
                <Button padding="lg" width="100%">
                  More
                </Button>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container pt-10 relative h-[300px] border-b-black border-b-[0.5px]">
        <div className="absolute  right-[50%] translate-x-1/2 bottom-0 w-[260px] h-[260px] bg-lightOrange rounded-full -z-10" />

        <span>Let`s collaborate</span>
        <SubHeading>Contact us</SubHeading>
        <SubHeading>reactconf@callstack.com</SubHeading>
      </section>
    </div>
  );
}
