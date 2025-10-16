import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../bpl-tools/utils/functions";
import { AboutProModal } from '../../../../../bpl-tools/ProControls'
import { generalStyleTabs, themes } from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";
import { useState } from 'react';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { BplBlockPreview } from '../../../../../bpl-tools/Components';
const Settings = ({ attributes, setAttributes, device, isPremium, siteUrl, clientId }) => {
  const { alignment, theme } = attributes;

  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const siteLocation = `${siteUrl}/wp-admin/edit.php?post_type=brsb_reactify_slider&page=demo_page#/pricing`;
  console.log(siteUrl);
  return (
    <>
      <InspectorControls>
        <div className="bBlocksInspectorInfo">
          Need more block like this? Checkout the bundle ➡{" "}
          <a
            href="https://wordpress.org/plugins/b-reactify"
            target="_blank"
            rel="noopener noreferrer"
          >
            B Blocks
          </a>
        </div>

        <TabPanel
          className="bPlTabPanel wp-block-b-reactify-slider"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}

                  isPremium={isPremium}
                  setIsProModalOpen={setIsProModalOpen}

                />
              )}

              {"style" === tab.name && (
                <Style attributes={attributes} setAttributes={setAttributes} device={device}

                  isPremium={isPremium}
                  setIsProModalOpen={setIsProModalOpen}

                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => setAttributes({ alignment: val })}
          describedBy={__("Block Name Alignment")}
          alignmentControls={[
            {
              title: __("Block Name in left", "textdomain"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("Block Name in center", "textdomain"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("Block Name in right", "textdomain"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />


        <BplBlockPreview
          blocks={themes}
          clientId={clientId}
          value={theme}
        />




      </BlockControls>

      <AboutProModal
        isProModalOpen={isProModalOpen}
        setIsProModalOpen={setIsProModalOpen}
        link={siteLocation}
      >
        <div style={{ fontFamily: "inherit", color: "#333", lineHeight: "1.6" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            {__("Premium Feature", "b-reactify")}
          </h3>

          <p
            style={{
              fontSize: "14px",
              marginBottom: "12px",
            }}
          >
            {__(
              "This feature is available only in the Pro version. Upgrade now to unlock enhanced customization and advanced design options.",
              "b-reactify"
            )}
          </p>

          <ul style={{ paddingLeft: "18px", margin: 0 }}>
            <li style={{ marginBottom: "6px" }}>
              <strong>{__("Typography Control:", "b-reactify")}</strong>{" "}
              {__(
                "Customize font family, size, weight, and spacing for titles and descriptions.",
                "b-reactify"
              )}
            </li>
            <li style={{ marginBottom: "6px" }}>
              <strong>{__("Advanced Styling:", "b-reactify")}</strong>{" "}
              {__(
                "Access gradient backgrounds, hover effects, and premium color palettes.",
                "b-reactify"
              )}
            </li>
            <li style={{ marginBottom: "6px" }}>
              <strong>{__("Layout Flexibility:", "b-reactify")}</strong>{" "}
              {__(
                "Fine-tune alignment, spacing, and responsiveness for your content blocks.",
                "b-reactify"
              )}
            </li>
          </ul>
        </div>
      </AboutProModal>
    </>
  );
};


export default compose(
  withSelect((select) => {
    return {
      siteUrl: select('core').getSite()?.url,
    };
  })
)(Settings);

