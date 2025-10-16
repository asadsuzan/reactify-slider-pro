import { getBackgroundCSS, getBorderCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes = {}, id }) => {
  const { styles = {} } = attributes;
  const { container, heading, card } = styles
    ;

  const mainSl = `#${id}`;
  const containerSl = `${mainSl} .brsb-carousel-container`
  const headingSl = `${mainSl} .carousel-title`
  const cardSl = `${mainSl} .card`
  const imgSl = `${cardSl} .card-image`
  const titleSL = `${cardSl} h3`
  const descSl = `${cardSl} p`


  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
     ${getTypoCSS(headingSl, heading?.typo, false).styles}
     ${getTypoCSS(titleSL, card?.title?.typo, false).styles}
     ${getTypoCSS(descSl, card?.desc?.typo, false).styles}
		
		${containerSl} {
		 ${getBackgroundCSS(container?.bg)}
     padding: ${getBoxCSS(container?.padding?.desktop)};
     border-radius: ${getBoxCSS(container?.radius)}
     
		}
	
    ${headingSl}{
    color:${heading?.color}
    }
    ${cardSl}{
   	${getBackgroundCSS(card?.bg)}
			box-shadow:${getMultiShadowCSS(card?.shadow)};
			${getBorderCSS(card?.border)}
    }

    ${cardSl}:hover{
    	box-shadow:${getMultiShadowCSS(card?.hoverShadow)};
    }
    ${imgSl}{
    	height:${card.img?.height};
      width:${card?.img?.width}
    }

     ${titleSL}{
     color:${card?.title?.color}
    }
     ${descSl}{
     color:${card?.desc?.color}
    }


	`,
      }}
    />
  );
};
export default Style;
