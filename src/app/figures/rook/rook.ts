import {
  Figure,
  Coordinate,
  PiecesColor,
} from '../../interfaces/figures.interface';
import { FigurePiece } from '../figures';

export class Rook extends FigurePiece {
  private _hasMoved: boolean = false;
  protected override _Figure: Figure;
  protected override _coordinates: Coordinate[] = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];

  constructor(private pieceColor: PiecesColor) {
    super(pieceColor);
    this._Figure =
      pieceColor === PiecesColor.White ? Figure.WhiteRook : Figure.BlackRook;
  }

  public get hasMoved(): boolean {
    return this._hasMoved;
  }

  public set hasMoved(_) {
    this._hasMoved = true;
  }
}
