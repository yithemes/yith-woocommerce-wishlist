import React from 'react';
import { Paper } from '@lapilli-ui/components';
import { createPortal } from 'react-dom';
import useFeedbackData from './hooks/use-feedback-data';

const Feedback = () => {
	const {} = useFeedbackData();
	const {
		className,
		showFeedback,
		RenderFeedback,
		feedbackMessage,
		container,
	} = useFeedbackData();

	return <>
		{
			showFeedback &&
			(
				RenderFeedback && ! RenderFeedback?.isEmpty ?
					<RenderFeedback/> :
					createPortal(
						<Paper className={ className } shadowColor="secondaryGlow" elevation={ 4 }>
							{ feedbackMessage }
						</Paper>,
						container
					)
			)
		}
	</>
};

export default Feedback;
