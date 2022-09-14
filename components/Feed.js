import Stories from './Stories';
import InputBox from './InputBox';
function Feed() {
  return (
    <div>
      <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
        {/* Stories */}
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
          <Stories />
        </div>

        {/* InputBox */}
        <InputBox />
        {/* Post */}
      </div>
    </div>
  );
}

export default Feed;
