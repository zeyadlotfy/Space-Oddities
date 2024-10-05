/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";

export default function TransparentCard() {
    return (
        <div className="p-8 bg-gradient-to-br from-purple-900 to-blue-900 flex justify-center items-center">
            <Card className="w-[300px] border-2 border-yellow-400 bg-transparent backdrop-blur-sm">
                <CardHeader className="space-y-1">
                    <div className="flex items-center space-x-2">
                        <Sun className="h-6 w-6 text-yellow-400" />
                        <CardTitle className="text-xl text-yellow-400">Solar Activity</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                        <img
                            src="/api/placeholder/300/200"
                            alt="Solar phenomenon"
                            className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <p className="mt-4 text-sm text-gray-100">
                        Witness the powerful dance of solar winds as they interact with Earth's
                        magnetic field, creating spectacular auroras.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}