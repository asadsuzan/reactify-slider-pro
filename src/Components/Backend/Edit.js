import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import BRSBCarousel from '../Common/BRSBCarousel';
import { withSelect } from '@wordpress/data';
import ClipBoard from '../../shortcode/clipBoard';
const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, postType, postId, } = props;
  const isPremium = brsbIsPipeChecker



  return (
    <>
      <Settings {...{ attributes, setAttributes, device, isPremium, clientId }} />

      <div {...useBlockProps({
        draggable: false
      })}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />
        {postType == 'brsb_reactify_slider' && (
          <ClipBoard
            shortcode={`[brsb_reactify_slider id=${postId}]`}
          />
        )}
        <BRSBCarousel attributes={attributes} isPremium={isPremium} isEditor={true} />

      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType, getCurrentPostId, getCurrentPostType } =
    select('core/editor');
  return {
    device: getDeviceType()?.toLowerCase(),
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
  };
})(Edit);
