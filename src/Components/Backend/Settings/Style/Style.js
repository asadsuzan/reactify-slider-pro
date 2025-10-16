import { __ } from "@wordpress/i18n";
import { PanelBody, PanelRow, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { Background, BoxControl, ColorControl, Device, Label, ShadowControl, Typography } from "../../../../../../bpl-tools/Components";
import { updateData } from '../../../../../../bpl-tools/utils/functions';
import { BorderControl } from '../../../../../../bpl-tools/Components/Deprecated';


const Style = ({ attributes, setAttributes, device }) => {
  const { styles = {} } = attributes;
  const { container, heading, card } = styles
  return (
    <>
      {/* container  */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "b-reactify")}
        initialOpen={false}
      >

        {/* background  */}
        <Background
          label="Background"
          value={container?.bg}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'container', 'bg')
            })
          }}
          defaults={"#0000"}

        />

        {/* padding  */}
        <PanelRow>
          <Label>Padding</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={container?.padding?.[device]}
          onChange={(v) => {
            setAttributes({ styles: updateData(styles, v, 'container', 'padding', device) })
          }}
          resetValues={{
            top: "48px",
            right: "16px",
            bottom: "48px",
            left: "16px"
          }}

        />
        {/* Radius  */}

        <BoxControl
          label='Radius'
          values={container?.radius}
          onChange={(v) => {
            setAttributes({ styles: updateData(styles, v, 'container', 'radius',) })
          }}
          resetValues={{
            top: "10px",
            right: "10px",
            bottom: "10px",
            left: "10px"
          }}

        />

      </PanelBody>
      {/* heading  */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Heading", "b-reactify")}
        initialOpen={false}
      >

        {/* typo  */}
        <Typography
          label="Typography"
          value={heading?.typo}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'heading', 'typo')
            })
          }}
        />
        <ColorControl
          label='Color'
          value={heading?.color}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'heading', 'color')
            })
          }}

        />
      </PanelBody>

      {/* slide  */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Slide", "b-reactify")}
        initialOpen={false}
      >

        {/* background  */}
        <Background
          label="Background"
          value={card?.bg}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'bg')
            })
          }}

        />

        { /* border  */}

        <BorderControl
          label="Border"
          value={card?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'card', 'border'),
            })
          }
        />

        { /* box shadow  */}
        <ShadowControl
          label={__('Shadow', 'b-reactify')}
          value={card?.shadow}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'card', 'shadow'),
            })
          }
        />

        { /* hover box shadow  */}
        <ShadowControl
          label={__('Hover Shadow', 'b-reactify')}
          value={card?.hoverShadow}
          onChange={(v) =>
            setAttributes({
              styles: updateData(
                styles,
                v,
                'card',
                'hoverShadow'

              ),
            })
          }
        />

        {/* image height */}
        <UnitControl
          className="mt20"
          label="Image Height"
          value={card?.img?.height}
          onChange={(v) => { setAttributes({ styles: updateData(styles, v, 'card', "img", 'height') }) }}

        />


        {/* title typo */}

        <Typography
          label="Title Typo"
          value={card?.title.typo}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'title', 'typo')
            })
          }}
        />
        {/* title color  */}
        <ColorControl
          label='Title Color'
          value={card?.title?.color}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'title', 'color')
            })
          }}

        />

        {/* description typo */}

        <Typography
          label="Description Typo"
          value={card?.desc.typo}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'desc', 'typo')
            })
          }}
        />
        {/* desc color  */}
        <ColorControl
          label='Description Color'
          value={card?.desc?.color}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'card', 'desc', 'color')
            })
          }}

        />


      </PanelBody>
    </>
  );
};

export default Style;
