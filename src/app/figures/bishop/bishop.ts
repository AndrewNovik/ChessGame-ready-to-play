import {
  Figure,
  Color,
  FigureDirections,
} from '../../interfaces/figures.interface';
import { FigurePiece } from '../figures';

export class Bishop extends FigurePiece {
  protected override _Figure: Figure;
  protected override _figureDirections: FigureDirections[] = [
    { x: 1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 },
    { x: -1, y: -1 },
  ];

  constructor(private pieceColor: Color) {
    super(pieceColor);
    this._Figure =
      pieceColor === Color.White ? Figure.WhiteBishop : Figure.BlackBishop;
  }
}
