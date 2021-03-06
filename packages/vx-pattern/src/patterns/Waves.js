import React from 'react';
import cx from 'classnames';
import Path from './Path';

export default function Waves({
  id,
  width,
  height,
  path,
  fill,
  stroke,
  strokeWidth,
  strokeDasharray,
  strokeLinecap,
  shapeRendering,
  background,
  className,
}) {
  return (
    <Path
      className={cx('vx-pattern-wave', className)}
      path={`M 0 ${height/2} c ${height/8} ${-height/4} , ${height*3/8} ${-height/4} , ${height/2} 0
             c ${height/8} ${height/4} , ${height*3/8} ${height/4} , ${height/2} 0 M ${-height/2} ${height/2}
             c ${height/8} ${height/4} , ${height*3/8} ${height/4} , ${height/2} 0 M ${height} ${height/2}
             c ${height/8} ${-height/4} , ${height*3/8} ${-height/4} , ${height/2} 0`}
      id={id}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeLinecap={strokeLinecap}
      shapeRendering={shapeRendering}
      background={background}
    />
  );
}
