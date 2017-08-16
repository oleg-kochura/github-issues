import React  from 'react';
import Button from 'react-bootstrap-button-loader';


const svgIcon = () => (
	<span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 50 50">
        <path
	        style={{
		        fill: 'rgb(41, 128, 185)',
		        textIndent:0,
		        textAlign:'start',
		        lineHeight: 'normal',
		        textTransform: 'none',
		        blockProgression: 'tb',
		        InkscapeFontSpecification: 'Bitstream Vera Sans',
	        }}
	        d="M25,47.302l-0.64-0.533c-1.217-1.015-2.861-2.115-4.765-3.39C12.169,38.408,2,31.601,2,20C2,12.832,7.832,7,15,7 c3.896,0,7.542,1.734,10,4.699C27.458,8.734,31.104,7,35,7c7.168,0,13,5.832,13,13c0,11.601-10.169,18.408-17.595,23.379 c-1.904,1.274-3.548,2.375-4.765,3.39L25,47.302z"
	        overflow="visible"
	        enableBackground="accumulate"
	        fontFamily="Bitstream Vera Sans"
        />
      </svg>
    </span>
);


const LoadingButton = ({ disabled, fetching }) => (
	<Button type="submit"
	        icon={svgIcon()}
	        disabled={disabled}
	        loading={fetching}>
		Load
	</Button>
);

export default LoadingButton;