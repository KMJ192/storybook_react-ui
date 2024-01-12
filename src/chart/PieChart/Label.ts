import Canvas from '../Common/Canvas';
import type { ChartStrategy } from '../Common/types';
import type { PieChartLabelDataInfo } from './types';

type PieChartLabelParams = {
  canvas: HTMLCanvasElement;
};

class Label implements ChartStrategy {
  public canvas: Canvas;

  public dataInfo: Array<PieChartLabelDataInfo>;

  private initRenderInterval: number;

  private radius: number;

  public isRender: boolean;

  constructor() {
    this.canvas = new Canvas();

    this.dataInfo = [];

    this.initRenderInterval = 0;

    this.radius = 0;

    this.isRender = false;
  }

  private render = () => {
    const { canvas, ctx } = this.canvas;
    if (!canvas || !ctx) return;
    const { clientWidth: width, clientHeight: height } = canvas;
    const { dataInfo, radius, initRenderInterval: curInterval } = this;

    ctx.clearRect(0, 0, width, height);

    const angle = (degree: number) => {
      return ((degree - 90) / 180) * Math.PI;
    };

    const len = dataInfo.length;
    for (let i = 0; i < len; i++) {
      const {
        label,
        labelWidth,
        labelHeight,
        midDegree,
        midDegreeX,
        midDegreeY,
        isHalf,
      } = dataInfo[i];

      if (label === '') continue;

      const ptLen = radius * 0.12;

      const labelPointX1 =
        Math.cos(angle(midDegree)) * (ptLen * curInterval) + midDegreeX;
      const labelPointX1Dist = Math.cos(angle(midDegree)) * ptLen + midDegreeX;
      const labelPointY =
        Math.sin(angle(midDegree)) * (ptLen * curInterval) + midDegreeY;
      const labelPointYDist = Math.sin(angle(midDegree)) * ptLen + midDegreeY;
      const labelPointX2 = isHalf
        ? Math.cos(angle(midDegree)) * (ptLen * curInterval) +
          midDegreeX +
          ptLen
        : Math.cos(angle(midDegree)) * (ptLen * curInterval) +
          midDegreeX -
          ptLen;

      ctx.save();
      // ctx.strokeStyle = 'black';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(midDegreeX, midDegreeY);
      ctx.lineTo(labelPointX1, labelPointY);
      ctx.moveTo(labelPointX1Dist, labelPointYDist);
      ctx.lineTo(labelPointX2, labelPointYDist);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();

      const labelX = isHalf
        ? labelPointX1Dist + radius * 0.18
        : labelPointX1Dist - (labelWidth + radius * 0.18);
      const labelY = labelPointYDist + labelHeight / 2;

      ctx.save();
      ctx.globalAlpha = curInterval;

      ctx.fillText(label, labelX, labelY);
      ctx.restore();
    }
  };

  public update = ({
    dataInfo,
    radius,
  }: {
    dataInfo: Array<PieChartLabelDataInfo>;
    radius: number;
  }) => {
    this.dataInfo = dataInfo;
    this.radius = radius;
  };

  public renderer = () => {
    if (this.isRender) return;

    if (this.initRenderInterval === 1) {
      this.isRender = true;
      this.render();
      this.isRender = false;
      return;
    }

    const animation = () => {
      if (this.initRenderInterval >= 1) {
        this.initRenderInterval = 1;
        this.isRender = false;
        return;
      }

      this.initRenderInterval += 0.009;
      if (this.initRenderInterval > 1) this.initRenderInterval = 1;
      this.render();
      window.requestAnimationFrame(animation);
    };
    this.isRender = true;
    window.requestAnimationFrame(animation);
  };

  public reload = () => {
    this.canvas.reload();
  };

  public load = ({ canvas }: PieChartLabelParams) => {
    this.canvas.load({ canvas });
    if (!this.canvas.canvas) return;

    this.canvas.canvas.style.position = 'absolute';
  };
}

export default Label;
