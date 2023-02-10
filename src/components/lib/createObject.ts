interface ITemplateProps {
  [key: string]: ITemplateItemProps;
}
interface ITemplateItemProps {
  level: number;
  brandName: string;
  link: string;
  logo: string;
  tierName?: string;
  scaleX?: number;
  scaleY?: number;
}
function createObject(data) {
  data = Object.entries(data);
  return data.reduce((acc, cur) => {
    const key = cur[0];
    const { level, tierName, link, logo, brandName, scaleX, scaleY } = cur[1];
    acc[level] = {
      ...acc[level],
      [key]: {
        brandName,
        link,
        logo,
        ...(tierName && { tierName }),
        ...(scaleX && { scaleX }),
        ...(scaleY && { scaleY })
      }
    };
    return acc;
  }, {});
}

export { createObject, ITemplateProps };
