import React, {useState} from 'react';
import {HoverCard, HoverCardContent, HoverCardTrigger} from '@/components/ui/hover-card';
import {Button} from '@/components/ui/button';
import axios from 'axios';

function DashboardHoverCard() {
  const [hoveredWorkOrderData, setHoveredWorkOrderData] = useState(null);
  const [hovering, setHovering] = useState(false);

  const handleHover = async (workOrderId) => {
    // Fetch work order data based on workOrderId
    try {
      const response = await axios.get(`/api/workorders/${workOrderId}`);
      setHoveredWorkOrderData(response.data);
      setHovering(true);
    } catch (error) {
      console.error('Error fetching work order data:', error);
    }
  };

  //clear/reset fetched data when not hovering
  const handleHoverEnd = () => {
    setHoveredWorkOrderData(null);
    setHovering(false);
  };

  return (
    <HoverCard>
      {/* HoverCardTrigger to handle hover events */}
      <HoverCardTrigger>
        <Button>Hover</Button>
      </HoverCardTrigger>
      <HoverCardContent className='card-main-content'>
        {/* Render work order details */}
        {hoveredWorkOrderData && (
          <>
            <p>Work Order ID: {hoveredWorkOrderData.id}</p>
            <p>Status: {hoveredWorkOrderData.status}</p>
            {/* Add more work order details as needed */}
          </>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}

export default DashboardHoverCard;