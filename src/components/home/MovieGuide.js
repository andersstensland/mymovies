import React from "react";
import { Link } from "react-router-dom";

export const MovieGuide = () => {
  return (
    <>
      {/* How It Works Section */}
      <div className="flex bg-black md:flex-row pl-14 h-full w-full text-white">
        <div className="flex flex-col flex-1 md:px-8">
          {/* Content for the How it works section */}
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl py-4 font-bold text-center">
            How MyMovies works
          </h1>
          <div className="flex justify-center w-full">
            <h5 className="sm:text-md md:text-lg lg:text-xl py-4 text-center w-2/3">
              <Link to="/Login" className="underline">
                Sign in
              </Link>{" "}
              or{" "}
              <Link to="/Register" className="underline">
                register
              </Link>{" "}
              to get started. We're your home for logging, rating and reviewing
              films, your watchlist of titles to see, your source for lists and
              inspiration, a cast and crew database and an activity stream of
              passionate film criticism, discussion and discovery.
            </h5>
          </div>

          {/* Section 1 */}
          <div className="flex flex-col p-4 mt-4 md:flex-row md:mt-0 md:space-x-4">
            <div className="w-1/3">
              {/* img */}
              <div></div>
            </div>
            <div className="w-2/4">
              <h5 className="text-xl font-bold mb-2">
                Tell us what you've have seen
              </h5>
              <p className="pr-2 text-xs">
                Get your Letterboxd underway by visiting our Popular section and
                marking a few films you’ve seen. Click the ‘eye’ on any film
                poster to tell us you’ve watched it (add a ‘like’ if you liked
                it and/or a rating). We add all watched titles to your Films tab
                and then we can show you reviews containing spoilers (usually
                hidden) and other cool stuff. If you’re Pro we compute detailed
                stats based on all your watched films (see below).
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col p-4 mt-4 md:flex-row md:mt-0 md:space-x-4">
            <div className="w-full">
              <h5 className="text-xl font-bold mb-2">
                Browse your watched films
              </h5>
              <p className="pr-2 text-xs">
                Now that you’ve added some films, you can find them in the Films
                tab of your profile. As you add more content, your profile
                starts to reflect your taste. You can also browse the films of
                other members, or the community, with Hide watched films
                activated to find more great films to watch.
              </p>
            </div>
            <div className="w-full">
              {/* img */}
              <div></div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col p-4 mt-4 md:flex-row md:mt-0 md:space-x-4">
            <div className="w-full">
              {/* img */}
              <div></div>
            </div>
            <div className="w-full">
              <h5 className="text-xl font-bold mb-2">
                Save films to watch later
              </h5>
              <p className="pr-2 text-xs">
                One of our most-loved features, the Watchlist, lets you keep a
                list of films you want to see. Start in Most Anticipated and
                mark a few films you want to see—use the ‘clock’ on a film or
                review page, or open the options menu on any poster (shown
                opposite). If you subsequently log or mark a film as watched,
                we’ll move it from your Watchlist to your Films (and add it to
                your Diary, if you provide a date—more on that below).
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex md:flex-row">
            <div className="w-full">
              {" "}
              <div className="flex flex-col w-full p-4">
                <h5 className="text-xl font-bold mb-2">Make and share lists</h5>
                <p className="pr-2 text-xs">
                  Lists are a great way to share a collection of related films,
                  or to rank the films of your favorite genre, star, director or
                  franchise. It’s fun to welcome suggestions for your lists from
                  other members. Start a list on your Lists tab, then add films
                  on the ‘Edit’ screen (or from the ‘more options’ menu on a
                  poster). The first time you make a list public, it’s shared
                  with your followers.
                </p>
                <button className="bg-green-400 text-white px-4 py-2 mt-2">
                  Sign in to make lists
                </button>
              </div>
            </div>
            <div className="w-full"></div>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col p-4 mt-4 md:flex-row md:mt-0 md:space-x-4">
            <div className="w-full"></div>
            <div className="w-full">
              <h5 className="text-xl font-bold mb-2">
                Your account, profile and settings
              </h5>
              <p className="pr-2 text-xs">
                Click your username (at the top of each page) for shortcuts to
                the main sections of your account. Your Profile, Films, Diary,
                Watchlist and other pages are here. You can customize your name,
                location, website, bio and favorite films in Settings. We use
                your X / Twitter avatar if you connect your account, or a
                Gravatar matching the email on your profile.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col p-4 mt-4 md:flex-row md:mt-0 md:space-x-4">
            <div className="w-full">
              <h5 className="text-xl font-bold mb-2">Find members to follow</h5>
              <p className="pr-2 text-xs">
                The best way to find members to follow is by reading reviews of
                films you like, to identify the voices and opinions you dig. Our
                Members page lists popular accounts. As you follow more people,
                we create a personalized Activity stream full of reviews and
                recommendations from these members (and you're bound to find new
                people to follow from the Likes included here). Use the Incoming
                tab to see who's interacting with you, and upgrade to Pro to
                personalize the types of activity you see on each device.
              </p>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};
