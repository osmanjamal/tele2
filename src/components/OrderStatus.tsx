import React from 'react';
import { Order } from '../types';
import { format } from 'date-fns';

interface OrderStatusProps {
  order: Order;
}

const statusMap = {
  pending: { text: 'Pending / قيد الانتظار', color: 'bg-yellow-500' },
  confirmed: { text: 'Confirmed / تم التأكيد', color: 'bg-blue-500' },
  preparing: { text: 'Preparing / جاري التحضير', color: 'bg-purple-500' },
  ready: { text: 'Ready / جاهز', color: 'bg-green-500' },
  delivered: { text: 'Delivered / تم التوصيل', color: 'bg-gray-500' },
  cancelled: { text: 'Cancelled / ملغي', color: 'bg-red-500' },
};

export function OrderStatus({ order }: OrderStatusProps) {
  const status = statusMap[order.status];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">Order #{order.id.slice(-6)}</h3>
          <p className="text-sm text-gray-500">
            {format(new Date(order.created_at), 'PPpp')}
          </p>
        </div>
        <span className={`${status.color} text-white px-3 py-1 rounded-full text-sm`}>
          {status.text}
        </span>
      </div>

      <div className="space-y-2">
        {order.items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <span className="font-medium">{item.quantity}x</span>
              <span className="ml-2">{item.menu_item_id}</span>
            </div>
            <span>{item.price} AED</span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-bold">Total</span>
          <span className="font-bold">{order.total} AED</span>
        </div>
      </div>
    </div>
  );
}