import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  ToggleControl,

} from '@wordpress/components';
import { Device, ItemsPanel, Label } from '../../../../../../bpl-tools/Components';
import sliderItemsPanel from '../../../itemsPanel/sliderItemsPanel';
import { updateData } from '../../../../../../bpl-tools/utils/functions';
import { BControlPro } from '../../../../../../bpl-tools/ProControls';
import { themeOptions } from '../../../../utils/options';
import { themeSwitch } from '../../../../utils/functions';

const General = ({ attributes, setAttributes, device, isPremium, setIsProModalOpen }) => {
  const { responsive, sliderSettings, theme } = attributes;
  const premiumProps = { isPremium, setIsProModalOpen };
  console.log(theme);
  return (
    <>
      {/* 🎞 Slides Section */}
      <PanelBody
        className="bPlPanelBody"
        title={__('Sliders', 'b-reactify')}
        initialOpen={true}
      >

        <SelectControl
          value={theme}
          options={themeOptions}
          onChange={(value) =>
            setAttributes(themeSwitch(value, attributes))
          }
        />
        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="sliderItems"
          activeIndex={0}
          newItem={{
            title: 'Creative Web Design',
            desc: 'Transform your ideas into stunning websites with modern design principles.',
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
          }}
          ItemSettings={sliderItemsPanel}
          design="sortable"
          title="title"
          itemLabel="Slide"
        />
      </PanelBody>

      {/* ⚙️ Options Section */}
      <PanelBody
        className="bPlPanelBody"
        title={__('Options', 'b-reactify')}
        initialOpen={false}
      >
        {/* Device-specific Items Control */}
        <PanelRow>
          <Label>{__('Items per view', 'b-reactify')}</Label>
          <Device />
        </PanelRow>

        <BControlPro
          value={responsive?.[device]?.items}
          onChange={(v) =>
            setAttributes({
              responsive: updateData(responsive, v, device, 'items'),
            })
          }
          min={1}
          max={6}
          Component={RangeControl}
          {...premiumProps}
        />

        {/* 🧩 Slider Settings */}
        <ToggleControl
          label={__('Infinite Loop', 'b-reactify')}
          checked={sliderSettings?.infinite}
          onChange={(val) =>
            setAttributes({
              sliderSettings: { ...sliderSettings, infinite: val },
            })
          }
        />

        <ToggleControl
          label={__('Auto Play', 'b-reactify')}
          checked={sliderSettings?.autoPlay}
          onChange={(val) =>
            setAttributes({
              sliderSettings: { ...sliderSettings, autoPlay: val },
            })
          }
        />

        {sliderSettings?.autoPlay && (
          <RangeControl
            label={__('Auto Play Speed (ms)', 'b-reactify')}
            value={sliderSettings?.autoPlaySpeed}
            onChange={(val) =>
              setAttributes({
                sliderSettings: { ...sliderSettings, autoPlaySpeed: val },
              })
            }
            min={1000}
            max={8000}
            step={500}
          />
        )}

        <ToggleControl
          label={__('Show Dots', 'b-reactify')}
          checked={sliderSettings?.showDots}
          onChange={(val) =>
            setAttributes({
              sliderSettings: { ...sliderSettings, showDots: val },
            })
          }
        />

        <ToggleControl
          label={__('Show Arrows', 'b-reactify')}
          checked={sliderSettings?.showArrows}
          onChange={(val) =>
            setAttributes({
              sliderSettings: { ...sliderSettings, showArrows: val },
            })
          }
        />

        <ToggleControl
          label={__('Keyboard Control', 'b-reactify')}
          checked={sliderSettings?.keyBoardControl}
          onChange={(val) =>
            setAttributes({
              sliderSettings: { ...sliderSettings, keyBoardControl: val },
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default General;
