import { TextareaControl, TextControl } from '@wordpress/components';
import { updateData } from '../../../../bpl-tools/utils/functions';
import { InlineMediaUpload } from '../../../../bpl-tools/Components';


const sliderItemsPanel = ({ attributes, index, setAttributes }) => {
    const { sliderItems, } = attributes;
    const currentSlide = sliderItems[index] || {};

    return (
        <>
            <TextControl
                label="Title"
                value={currentSlide?.title}
                onChange={(v) =>
                    setAttributes({
                        sliderItems: updateData(sliderItems, v, index, 'title'),
                    })
                }
            />
            <TextareaControl
                label="Description"
                value={currentSlide?.desc}
                onChange={(v) =>
                    setAttributes({
                        sliderItems: updateData(sliderItems, v, index, 'desc'),
                    })
                }
            />
            <InlineMediaUpload
                label="Banner"
                value={currentSlide?.img}
                onChange={(v) =>
                    setAttributes({
                        sliderItems: updateData(sliderItems, v, index, 'img'),
                    })
                }

            />



        </>
    );
};

export default sliderItemsPanel;
