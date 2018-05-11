import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'styles/mixins';
import { Icon } from 'shared/icons/Icons.styles';
import { modalBgColor, highlightColor } from 'styles/colours';
import { MIN_MODAL_WIDTH, transitionEasing } from 'config.js';
import { darken } from 'polished';

const ROW_HEIGHT = 25;

export const Wrapper = styled.div`
	font-size: 13px;
	min-height: 50px;
	z-index: 2;

	${media.medium`
		font-size: 15px;
	`};
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	padding: 10px 0;

	&:first-child {
		padding-top: 5px;
	}

	&:last-child {
		border-bottom: 0;
		padding-bottom: 0;
		min-height: 0;
	}

	${props =>
		props.isFixed &&
		media.medium`
			background: ${modalBgColor};
			bottom: 0;
			box-shadow: 0 5px 25px rgba(0,0,0,0.25);
			height: 75px;
			padding: 0 12px;
			position: fixed;
			right: 0;
			width: ${MIN_MODAL_WIDTH}px;
		`};

	${props =>
		props.isFixed &&
		media.small`
			width: 100%;
		`};
`;

Row.propTypes = {
	isFixed: PropTypes.bool,
};

Row.defaultProps = {
	isFixed: false,
};

export const Label = styled.div`
	display: flex;
	justify-content: space-between;
	line-height: ${ROW_HEIGHT}px;
	min-height: ${ROW_HEIGHT}px;
`;

export const Footer = styled.div`
	display: flex;
	font-size: 0.85em;
	justify-content: flex-end;
	padding: 4px 2px;
	margin-bottom: -10px;

	${media.medium`
		font-size: 1em;
		padding: 8px 4px;
	`};
`;

export const Link = styled.a`
	color: ${darken(0.3, highlightColor)};
	cursor: pointer;
	text-decoration: underline;
	text-decoration-style: dotted;

	&:hover,
	&:focus {
		text-decoration: none;
	}
`;

export const ResetButton = styled.button.attrs({
	type: 'button',
})`
	align-self: center;
	appearance: none;
	border: none;
	color: white;
	background: #9c9c9c;
	border-radius: 2px;
	cursor: pointer;
	display: block;
	font-size: 0.85em;
	line-height: 2;
	margin-left: auto;
	outline: none;
	padding: 0 7px;
	transition: 0.15s;

	&:hover,
	&:focus {
		background: ${highlightColor};
	}

	&:disabled {
		opacity: 0.3;

		&:hover,
		&:focus {
			background: #9c9c9c;
		}
	}

	${media.medium`
		font-size: 1em;
		margin-left: 0;
	`};
`;

export const Swatch = styled.button.attrs({
	type: 'button',
})`
	appearance: none;
	align-items: center;
	border: none;
	border-radius: 2px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	${props =>
		props.color &&
		css`
			background-color: ${props.color};
		`};
	cursor: pointer;
	display: flex;
	height: ${ROW_HEIGHT}px;
	justify-content: center;
	transition: box-shadow 0.15s;
	width: ${ROW_HEIGHT * 1.5}px;

	${Icon} {
		color: rgba(180, 180, 180, 0.5);
		height: 12px;
		transition: color 0.15s;
	}

	&:hover,
	&:focus {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);

		${Icon} {
			color: rgba(180, 180, 180, 0.7);
		}
	}

	&:focus {
		outline: 1px solid ${highlightColor};
	}
`;

export const enterTransitionMs = 250;
export const exitTransitionMs = 180;

const modalTransitions = {
	entering: { opacity: 0, height: '0px', margin: 0, padding: 0 },
	entered: { opacity: 1, height: '116px' },
	exiting: {
		opacity: 0,
		height: '0px',
		transitionDuration: exitTransitionMs,
	},
	exited: { opacity: 0, height: '0px' },
};

export const ColorWrapper = styled.div`
	box-sizing: content-box;
	overflow: hidden;
	padding: 0 5px;
	margin: 0 -5px -5px;
	transition: ${enterTransitionMs}ms;
	transition-timing-function: ${transitionEasing};

	${props =>
		props.transitionState && {
			...modalTransitions[props.transitionState],
		}};
`;
